let btn=document.querySelector(".btn")
let img1=document.querySelector(".img1")
let img2=document.querySelector(".img2")
let img3=document.querySelector(".img3")
let img4=document.querySelector(".img4")


function ru() {
    if (img1.classList=="img1") {
        img1.classList.add("img2");
        img2.classList.add("img1");
       

        img1.classList.remove("img1");
        img2.classList.remove("img2");


    }else if(img2.classList=="img1"){
        img1.classList.add("img2");
        img2.classList.add("img3");
        img3.classList.add("img1");

        img1.classList.remove("img1");
        img2.classList.remove("img1");
        img3.classList.remove("img3");


    }else if(img3.classList=="img1"){
        img1.classList.add("img4");
        img2.classList.add("img2");
        img3.classList.add("img3");
        img4.classList.add("img1");



        img1.classList.remove("img2");
        img2.classList.remove("img3");
        img3.classList.remove("img1");
        img4.classList.remove("img4");

    }else if(img4.classList=="img1"){
        img1.classList.add("img1");
        img2.classList.add("img2");
        img3.classList.add("img3");
        img4.classList.add("img4");



        img1.classList.remove("img4");
        // img2.classList.remove("img2");
        // img3.classList.remove("img3");
        img4.classList.remove("img1");
        
    }
}