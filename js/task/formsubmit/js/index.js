let input=document.querySelector("input");

function on(e,spnId,msg) {
if(e.value == ""){
    spnId.innerText=msg
    spnId.style.color="red";
    e.style.border="solid red 2px"
}else{
    spnId.innerText=""; 
    e.style.border="solid green 2px"
}
}

function crrect() {
    let Name=/[a-zA-Z0-9]/;
    if (Name.test(input.value)) {
        
    }else{
        
    }
}