
// const coloer ={
//     White:"../img/1001-Simply-White.webp",
//     Black : "../img/1005-Jet-Black.webp",
//     Kendall : "../img/1020-Kendall.webp",
//     Almond : "../img/1029-Almond.webp",
//     Blue : "../img/1033-Ice-Blue.webp",
//     Grey : "../img/1035-Charcoal-Grey.webp",
//     Metro : "../img/3160-Metro.webp",
//     MetroGrey : "../img/3161-Metro-Grey.webp",
    
// }
function card(){
    
    let inp=document.querySelector("input")
    let text=document.querySelector("textarea")
    let body=document.querySelector("body")
   console.log(inp.value);
switch (parseInt(inp.value)) {
    case 1001:body.style.backgroundImage="url(../img/1001-Simply-White.jpg)"      
        break;


        case 1020:body.style.background="url(../img2/1020-Kendall.jpg)"      
        break;

        case 1029:body.style.background="url(../img2/1029-Almond.jpg)"      
        break;

        case 1033:body.style.background=" url(../img2/1033-Ice-Blue.jpg)"      
        break;

        case 1035:body.style.background=" url(../img2/1035-Charcoal-Grey.jpg)"      
        break;

        case 3162:body.style.background="url(../img2/3162-Omega-Azer.jpg)"      
        break;

        case 3163:body.style.background="url(../img2/3163-Omega-Aura.jpg)"      
        break;

        case 3167:body.style.background="url(../img2/3167-Turkish-Onex.jpg)"      
        break;

        case 3168:body.style.background="url(../img2/3168-Sombre-Grey.jpg)"      
        break;

        case 3169:body.style.background="url(../img2/3169-Soft-Sombre.jpg)"      
        break;

        case 3170:body.style.background="url(../img2/3170-Creamy-Chestnut.jpg)"      
        break;
        
        case 3171:body.style.background=" url(../img2/3171-Nocino-Wood.jpg)"      
        break;
        
        case 3177:body.style.background="url(../img2/3177-Hexagon-Wood.jpg)"      
        break;

    default:console.log("not a coloer");
        break;
}
}