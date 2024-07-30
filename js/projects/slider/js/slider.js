let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
let img3=document.querySelector(".img3");
let img4=document.querySelector(".img4");
let arro1=document.querySelector(".arro1");
let arro2=document.querySelector(".arro2");
let btn=document.querySelectorAll("button")



setTimeout(() => {
    img1.style.width="40%"
}, 1000);

setTimeout(() => {
    img2.style.width="40%"
    img1.style.width="10%"

}, 3000);
setTimeout(() => {
    img3.style.width="40%"
    img2.style.width="10%"

}, 5000);

setTimeout(() => {
    img4.style.width="40%"
    img3.style.width="10%"
}, 7000);

setTimeout(() => {
    btn.style.display="block"
    img4.style.width="10%"
}, 9000);
let d=0;
function a() {
    if (d==0) {
    img1.style.width="40%"  
    d++;

    }
     else if (d==1) {
    img2.style.width="40%"
    img1.style.width="10%"
    d++;

    }else if(d==2){
        img3.style.width="40%"
    img2.style.width="10%"

        d++;
    }else if(d==3){
    img4.style.width="40%"
    img3.style.width="10%"
    d++;
    }else{
        img4.style.width="10%"
d=0
    }
}


let c=0;
function b() {
    
    if (c==0) {
        img3.style.width="40%" 
    img4.style.width="10%"

        c++;
    
        }
         else if (c==1) {
            img2.style.width="40%" 
            img3.style.width="10%"
        c++;
    
        }else if(c==2){
            img1.style.width="40%"
        img2.style.width="10%"
    
            c++;
        }else{
        img1.style.width="10%" 
        c=0
        }
}