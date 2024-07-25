
let ine = document.querySelector("#in");
let btn=document.querySelector(".btn");

btn.addEventListener("click",() => {
    
    if(ine.type=="password"){
       ine.type="text"
    }else{
        ine.type="password"
    }
})

