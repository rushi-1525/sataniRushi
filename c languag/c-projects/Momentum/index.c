#include<stdio.h>
int main(){


    // Q-1


//     int a;
//     printf("enter youer nomber : - ");
//     scanf("%d",&a);
    
    
// if (a%2==0)
// {
//   printf("youer nomber is Even");
// }else
// {
//     printf("youer nomber is Odd");
// }

// Q-2

int units;
float a,b,c,d;
printf("enter youer units :- ");
scanf("%d",&units);
if (units<=50)
{
     a=units*0.50;
    float ans2=(units*20/100)+a;
    printf("youer a bill is : - %f",ans2);
}else if (units<=100)
{
     b=25+(units-50)*0.75;
  float ans3=(units*20/100)+b;
    printf("youer a bill is : - %f",ans3);

}else if (units<=100)
{
    c=100+(units-150)*1.20;
 float ans4=(units*20/100)+c;
    printf("youer a bill is : - %f",ans4);

}else if (units>=250)
{
   d=220+(units-250)*1.50;
   float ans=(units*20/100)+d;
    printf("youer a bill is : - %f",ans);
}else{
    printf("sorry");
}
    return 0;
}