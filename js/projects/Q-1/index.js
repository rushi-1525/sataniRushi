let mark=prompt("enter youer marks under=100");
let gred;
if (mark<=100 && mark>=90) {
  gred="A";
}else if(mark<90 && mark>=70){
     gred="B";
}else if(mark<70 && mark>=50){
     gred="C";
}else if(mark<50 && mark>=45){
    gred="D";
}else{
    gred="F";
}
document.write(gred);