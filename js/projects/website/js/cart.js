//  Data Get From localStorage 
const data = localStorage.getItem("data");
let UserDetail = JSON.parse(data);
// Acess  All Element 
const container = document.querySelector(".card-cart");


// All content 
window.addEventListener("DOMContentLoaded", () => {
  const displayMenu = UserDetail.map((item) => {
    return `  <div class="card-body">
                                 <div class="d-flex justify-content-between">
                                   <div class="d-flex flex-row align-items-center">
                                     <div>
                                       <img
                                         src="${item.img}"
                                         class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                                     </div>
                                     <div class="ms-3">
                                       <h5>${item.name}</h5>
                                       <p class="small mb-0"> Navy Blue</p>
                                     </div>
                                   </div>
                                   <div class="d-flex flex-row align-items-center">
                                     <div style="width: 50px;">
                                       <h5 class="fw-normal mb-0">2</h5>
                                     </div>
                                    
                                     <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt dustbins"></i></a>
                                   </div>
                                 </div>
                               </div>
 `
  })
  const contentJoin = displayMenu.join("");
  container.innerHTML = contentJoin;
  handleDelete();
  priceTotal();
})
// Delete Function  
function handleDelete() {
  const dustbin = document.querySelectorAll(".dustbins");
  console.log(dustbin);
  dustbin.forEach((e, ind) => {
    e.addEventListener("click", () => {
      const target = e.parentElement.parentElement.parentElement.parentElement;
      console.log(target, ind);

      UserDetail.splice(target, 1);
      target.remove();
      localStorage.setItem("data", JSON.stringify(UserDetail));

    })
  })
}
