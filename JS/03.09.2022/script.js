// let a = 5

// while(a!=0){
//     alert('wmth');
//     a--;
//     alert(a);
// }

// do{
//     alert('smth');
//     a--;
// }while(a!=0)

// for(let i=0; i<a; i++){
//     alert('smth');
//     alert(a);
//     alert(i);
//     if (i==2){
//         alert(a);
//         alert(i);
//         continue;
//     }
// }

// // Task one

// let a = +prompt("Enter your number");

// while(a!=0){
//     alert("#");
//     a--;
// }

// // Task two

// let a = +prompt("Enter your number");

// while(a>=0){
//     alert(a);
//     a--;
// }

// // Task three

// let a = +prompt("Enter your number");
// let b = +prompt("Enter your power");
// let c = a;
// while(b>1){
//     b--;
//     a = a*c;
// }

// alert(a);

// // Task four

// let a = +prompt("Enter your number");
// let b = +prompt("Enter your number");

// let i = 1;

// let arr = [];

// function pickMin(a, b){
//     if (a > b){
//         return b;
//     }
//     else return a;
// }

// function pickMax(a, b){
//     if (a > b){
//         return a;
//     }
//     else return b;
// }

// while(i>pickMin(a, b)){
//     if(pickMax(a, b)%i==0 && pickMin(a, b)%i==0){
//         arr.push(i);
//     }
//     i++;
//     alert(i);
// }

// alert(arr);


// // Task five

// // решение с помощью цикла while

// let number = +prompt("Enter your number");

// let result = 1;

// while(number != 0){
//     result *= number;
//     number--;
// }

// alert(result);

// // решение через рекурсию

// function factorial(number){
//     return number?number*factorial(number-1):1;
// }

// //Do WHILE

// // Task one 

// let result;

// do{
//     result = +prompt("Enter correct result:");
// }while(result!= 2+2*2)

// // Task two

// let a = 50;
// let result = 1000;
// let cnt = 0;
// do{
//     result = result/2;
//     cnt++;
// }while(result>50);

// alert(cnt);

// // FOR

// // Task three

// let number = +prompt("Enter your number");

// for(let i = 1; i <= 100; i++){
//     if(number%i==0){
//         alert(i);
//     }
// }

// // Task four

// let a = +prompt("Enter your number");
// let b = +prompt("Enter your number");

// let arr = [];

// let substraction = b-a;

// for(let i = 0; i < substraction; i++){
//     arr.push(a);
//     a++;
// }

// for(let i = 1; i < arr.length; i++){
//     if(i%4==0){
//         alert(arr[i]);
//     }
// }

