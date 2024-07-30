
function validtion(e,spnId,msg) {

if (e.value=="") {
spnId.innerText=msg;
console.log(e);
}else{
    spnId.innerText="";
}
}