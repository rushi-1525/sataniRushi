const addTOCart = document.querySelectorAll(".btm-coll");
const count = document.querySelector(".count")

// Data Parse form localStorage
function filter( name,img) {
    let basket = JSON.parse(localStorage.getItem("data")) || [];

    let data = {
        name: name,
        img: img
    }
    basket.push(data);
    localStorage.setItem("data", JSON.stringify(basket));


}



