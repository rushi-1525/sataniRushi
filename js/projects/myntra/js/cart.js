window.addEventListener("load",function () {
    let productData = localStorage.getItem("cart");
    console.log(productData);

    let cart = JSON.parse(productData);
    console.log(cart);
   
    
   
       for (let i = 0; i < cart.length; i++) {
        let displayData = document.querySelector(".items").innerHTML += `
        <div class="item-ditels">
        <img src="${cart[i].img}" alt="" class="items-img">
        <h4 class="item-name">${cart[i].title}</h4>
        <h3 class="item-name">${cart[i].price}</h3>
    </div>
        `
       }


   
    console.log(displayData);
    
})


//  localStorage.removeItem("cart")
