
prompt("Hello How Are you");

let ask = confirm("Will you Date with me ?");

if(ask == true){
    prompt("When is Time to go? 1.Breakfast 2.Launch 3.dinner");
}
else if(ask == false){
    let please =  confirm("please go on a date with me");
    if(please == true){
        confirm("ok Thank you");
    }else if (please == false){
        confirm("ok jese jiski soach");
    }
}

let time = prompt("What is Time to go? 1.Breakfast 2.Launch 3.dinner");
  if(time =="breakfast" || time =="Breakfast" || time == "BREAKFAST"){
     prompt("What eat is Breakfast? 1.dhokla 2.gathiya 3.khaman");
     let menu =  confirm("ok");
  }