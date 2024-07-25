let a= document.querySelector(".a-let");
let b= document.querySelector(".b-let");
let c= document.querySelector(".c-let");


function plus() {
    totel=parseInt(a.value) + parseInt(b.value);
    c.innerHTML=totel;
}


function minus() {
    totel=parseInt(a.value) - parseInt(b.value);
    c.innerHTML=totel;
}

function multi() {
    totel=parseInt(a.value) * parseInt(b.value);
    c.innerHTML=totel;
}


function divaed() {
    totel=parseInt(a.value) / parseInt(b.value);
    c.innerHTML=totel;
}
