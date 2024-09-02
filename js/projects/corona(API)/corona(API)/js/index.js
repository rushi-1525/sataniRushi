
let table = document.querySelector(".tables");
let total_cases = document.querySelector("#total_cases");
let total_death = document.querySelector("#total_death");

async function CoronaApi() {
    const url = 'https://api.rootnet.in/covid19-in/stats/latest';
    const res = await fetch(url);
    let data = await res.json()
    total_cases.innerText = data.data.summary.total;
    total_death.innerText = data.data.summary.deaths;
    for (let i = 0; i < data.data.regional.length; i++) {
        table.innerHTML += `
            <tr >
            <td>${data.data.regional[i].loc}</td>
            <td>${data.data.regional[i].confirmedCasesIndian}</td>
            <td>${data.data.regional[i].confirmedCasesForeign}</td>
            <td>${data.data.regional[i].discharged}</td>
            <td>${data.data.regional[i].totalConfirmed}</td>
            </tr>
    `

    }
}
CoronaApi();