let input =document.querySelector("input");

function textDiv(){

let  content1=document.querySelector(".content1")

let divText2=document.createElement("div")
let pera=document.createElement("input");
let btn1=document.createElement("button");
let btn2=document.createElement("button");


divText2.className = "div-text2"
pera.className = "span-tex"
btn1.className = "pera"
btn2.className = "pera"

btn1.innerHTML="Edit"
btn2.innerHTML="Delate"


pera.disabled = true;


content1.appendChild(divText2);
divText2.appendChild(pera);
divText2.appendChild(btn1);
divText2.appendChild(btn2);

pera.value= input.value;


btn1.addEventListener("click",function () {
//    if (pera.disabled == true) {
//     pera.disabled = false;
//     btn1.innerHTML="Save"
//    }else{
//     pera.disabled = true;
//     btn1.innerHTML="Edit"
//    }

if (btn1.classList=="pera") {
btn1.innerHTML="Save"
btn1.classList.remove("pera")
btn1.classList.add("pera1")
input.value= pera.value;
pera.value="";

}else{
    btn1.classList.add("pera")

    btn1.innerHTML="Edit"
    pera.value= input.value;
    input.value= "";

}

})



btn2.addEventListener("click",function () {
    divText2.remove()
   
    })


    input.value="";
};


