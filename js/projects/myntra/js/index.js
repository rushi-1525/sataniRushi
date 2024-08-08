let btnProdect=document.querySelector(".all");
let btnProdect1=document.querySelector(".women");
let btnProdect2=document.querySelector(".men");
let none=document.querySelector(".none");
let none2=document.querySelector(".none2");
let foot=document.querySelector("footer")
function alla() {
    none2.style.display="block"
    none.style.display="block"

}
function women() {
none.style.display="none"
none2.style.display="block"

}

function men() {
    none2.style.display="none"
none.style.display="block"

    }



    
    
    let span=document.querySelector(".span");
    let btn=document.querySelectorAll(".btn-cole");
    let card=document.querySelectorAll(".card");

let cart1=document.querySelector(".cart-1");
let cart2=document.querySelector(".cart-2");
let cart3=document.querySelector(".cart-3");
let cart4=document.querySelector(".caet-4");
let cart5=document.querySelector(".caet-5");
let cart6=document.querySelector(".caet-6");
let cart7=document.querySelector(".caet-7");
let cart8=document.querySelector(".caet-8");
let cart9=document.querySelector(".caet-9");
let cart10=document.querySelector(".caet-10");

let inp1=document.querySelector(".inp1");
let inp2=document.querySelector(".inp2");
let inp3=document.querySelector(".inp3");
let inp4=document.querySelector(".inp4");
let inp5=document.querySelector(".inp5");
let inp6=document.querySelector(".inp6");
let inp7=document.querySelector(".inp7");
let inp8=document.querySelector(".inp8");
let inp9=document.querySelector(".inp9");
let inp10=document.querySelector(".inp10");


let input1=document.querySelector("input")
let total=document.querySelector(".total")

    span.style.display="none";
 let count=1;
    function cart(a,b,c,d) {
        span.style.display="block"
for (let index = 0; index < 1; index++) {
    span.innerHTML=count;
    count++; 
}
 b.style.display=a;
 c.value=d;
 c.style.display="block"


 let total1=parseInt(inp1.value) + parseInt(inp2.value) + parseInt(inp3.value)+parseInt(inp4.value) + parseInt(inp5.value) ;
 let total2=total1 + parseInt(inp6.value) + parseInt(inp7.value) + parseInt(inp7.value) + parseInt(inp9.value) + parseInt(inp10.value)

 
 total.innerHTML=total2;
    }


 let section2=document.querySelector(".section-1");
 let section=document.querySelector(".section-2")

 function button1() {

    if (section2.style.display=="block") {
        
        section2.style.display="block";
        none.style.display="block";
        none2.style.display="block";
        section.style.display="none";
    }else{
        section2.style.display="none";
        none.style.display="none";
        none2.style.display="none";
        foot.style.display="none";
        section.style.display="block"
    }
}


