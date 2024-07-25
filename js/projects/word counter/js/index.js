let input=document.querySelector("input");
let counter1=document.querySelector(".c-1");
let counter2=document.querySelector(".c-2");
let preview=document.querySelector(".preview");



function text(){
    if(input.value == ""){
        preview.innerHTML="";
        counter1.innerHTML="";
        counter2.innerHTML= "";
    }else{
        preview.innerHTML=input.value;
        counter1.innerHTML=input.value.length;  
        counter2.innerHTML= input.value.split(" ").length-1;
    }
}

function upp() {
 preview.innerHTML=(input.value.toUpperCase());
}
function low() {
    preview.innerHTML=(input.value.toLowerCase());
}
function c(){
 input.value="";
 preview.innerHTML="";
 counter1.innerHTML="";
counter2.innerHTML= "";
}

function r(){
    input.innerHTML=(value.trim())
}

function copyToClipboard() {
    navigator.clipboard.writeText(input.value)
}

function rem() {
    preview.innerHTML=preview.value.trim();
    inp
}