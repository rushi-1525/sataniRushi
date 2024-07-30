function formvalidat(e,spanId,msg){
    if (e.value == "") {
        spanId.innerText = msg;
    }else{
      spanId.innerText = "";
    }
}









































// function passMatch(){
//   // acess
//  let pass1 = document.querySelector('#password');
//  let pass2 = document.querySelector('#confirmpass');
//  let sp4 = document.querySelector('#sp4');

//   if(pass1 !== pass2){
//     sp4.innerText = 'password not match'
//   }
// }


//  access 
    // let username = document.querySelector('#Username');
    // let usermobile = document.querySelector('#Usermobile');
    // let userpass = document.querySelector('#Userpass');
    // let useremail = document.querySelector('#Useremail');



      // if(username.value == ""){
    //     console.log("plese fill usename");
    // }else if(usermobile.value == ""){
    //     console.log("plese fill mobile number");
    // }else if(userpass.value == ""){
    //     console.log("plese fill password");
    // }else if(useremail.value == ""){
    //     console.log("plese fill E-mail");
    // }