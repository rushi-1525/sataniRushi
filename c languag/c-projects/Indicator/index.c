#include<stdio.h>
#include<string.h>

int main(){


// Q-1 
 char str[50];
 fgets(str,50,stdin);
 puts(str);

int  lenth=strlen(str);

printf("Lenth Is %d",lenth-1);





// Q-2


// int n,r,sum=0,temp;    
// printf("enter the number :");    
// scanf("%d",&n);    
// temp=n;    
// while(n>0)    
// {    
// r=n%10;    
// sum=(sum*10)+r;    
// n=n/10;    
// }    
// if(temp==sum)    
// printf("palindrome number ");    
// else    
// printf("not palindrome");   





// Q-3


//     int num,sum,count=1,r;
//     while (count<=500){
//         num=count;
//         sum=0;
//         while (num){
//             r=num%10;
//             sum=sum+r*r*r;
//             num=num/10;
//         }
//         if (count==sum){
//             printf("%d is an Armstrong number.\n",count);
//         }
//         count++;
//     }


// Q-4

//    int a[100],size,max,i;

//    printf("Enter The Size Of array :");
//    scanf("%d",&size);
    
//     printf("Enter Value in array :");

//     for(int i=0;i<size;i++){
//         scanf("%d",&a[i]);
//     }
//     max=a[0];

//     for(int i=0;i<size;i++){
//         if (a[i]>max)
//         {
//             max=a[i];
//         }
//     }
//      printf("your Max Value is : %d",max);


    return 0;
}