let btn = document.querySelector(".btn");
let img = document.querySelector(".img")
let img2 = document.querySelector(".img2")

function ru() {
  if(img.classList == "img"){
    img.classList.add("img2");
    img.classList.remove("img");
  }else{
    img.classList.add("img");
    img.classList.remove("img2");
  }
}