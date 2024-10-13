function cleNumber(){
    let cle = document.querySelector(".cel")
    let farAns=(cle.value * 9/5) + 32 ;
    document.querySelector(".cel-ans").innerHTML=farAns
}


function farNumber(){
    let far = document.querySelector(".far")
let cleAns=(far.value * 9/5) + 32 
document.querySelector(".far-ans").innerHTML=cleAns

}