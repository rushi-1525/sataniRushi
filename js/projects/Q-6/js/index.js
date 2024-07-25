let ine1=document.querySelector(".ine1");
let ine2=document.querySelector(".ine2");
let ine3=document.querySelector(".ine3");
let r=document.querySelector(".s1");
let u=document.querySelector(".img2")
let s=document.querySelector(".img3")




function one() {
    if (ine1.value == "") {
     
        r.classList.remove("s1")
    }else{
        r.classList.add("s1")
    }
}
function two() {
    if (ine2.value == "") {
        u.classList.remove("s1")

    }else{
        u.classList.add("s1")
    }
}

function three() {
    if (ine3.value == "") {
        s.classList.remove("s1")

    }else{
   
        s.classList.add("s1")
    }
}