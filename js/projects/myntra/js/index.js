let btnProdect=document.querySelector(".all");
let btnProdect1=document.querySelector(".women");
let btnProdect2=document.querySelector(".men");
let none=document.querySelector(".none");
let none2=document.querySelector(".none2");

function alla() {
    none2.style.display="block"
    none.style.display="block"

}
function women() {
none.style.display="none";
none2.style.display="block";

};

function men() {
    none2.style.display="none";
none.style.display="block";

    }
    let span=document.querySelector(".span");
    span.style.display="none";



    function cart(title,price, img) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log(cart);
        cart.push({ title,price, img })
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));

       
      }  



    // localStorage.removeItem("cart")