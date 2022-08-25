// let a = 1;


// if(a ==1){
//     alert("equal 1");
// }
// else if (a ==2){
//     alert("equal 2")
// }
// else if (a ==4){
//     alert("equal 4")
// }
// else if (a ==4){
//     alert("equal 4")
// }
// else if (a ==5){
//     alert("equal 5")
// }
// else if (a ==6){
//     alert("equal 6") 
// }


// switch(a){
//     case 1:
//         alert("equal 1");
//         break;
//     case 2:
//         alert("equal 2");
//         break;
//     case 3:
//         alert("equal 3");
//         break;
//     case 4:
//         alert("equal 4");
//         break;
//     case 5:
//         alert("eqaul 5");
//         break;
//     case 6:
//         alert("equal 6");
//         break;
// }

// // Task one

// let number = +prompt("Enter your number: ");

// if(number > 0){
//     alert("positive");
// }
// else if(number < 0){
//     alert("negative");
// }
// else if(number == 0){
//     alert("Zero");
// }
// else{
//     alert("It's not a number");
// }

// // Task two

// let age = +prompt("Enter your age");

// if (age > 0 && age < 120){
//     alert("Correct");
// }
// else{
//     alert("Invalid age");
// }

// // Task three

// let number = +prompt("Enter your number");

// alert(Math.abs(number));

// let number = +prompt("Enter your number");

// if (number > 0 ){
//     alert(number);
// }
// else if (number < 0) {
//     alert(-1*number);
// }
// else{
//     alert(0);
// }

// // Task four

// let hours = +prompt("Enter what hour");
// let minutes = +prompt("Enter what minutes");
// let seconds = +prompt("Enter what seconds");

// if ((hours > 0 && hours < 24) && (minutes > 0 && minutes < 60) && (seconds > 0 && seconds < 60)){
//     alert(hours + ":" + minutes + ":" + seconds);
// }
// else{
//     alert("Incorrect");
// }

// // Task five

// let x = +prompt("Enter x coordiante...");
// let y = +prompt("Enter y coordiante...");

// if (x > 0 && y >= 0) {
//     alert(1);
// }
// else if (x < 0 && y >= 0){
//     alert(2);
// }
// else if (y < 0 && x <= 0){
//     alert(3);
// }
// else if (y < 0 && x >= 0){
//     alert(4);
// }
// else if(x==0 && y==0){
//     alert("Center");
// }
// else{
//     alert("Invalid input");
// }

// // Task two Switch

// let fNumber = +prompt("Enter first number...");
// let sNumber = +prompt("Enter second number...");

// let sign = prompt("Enter sign...");

// switch(sign){
//     case "+":
//         alert(fNumber+sNumber);
//         break;
//     case "-":
//         alert(fNumber-sNumber);
//         break;
//     case "*":
//         alert(fNumber*sNumber);
//         break;
//     case "/":
//         alert(fNumber/sNumber);
//         break;
// }

// // task one Ternary

// let fNumber =+prompt("Enter a number");
// let sNumber =+prompt("Enter a number");

// (fNumber>sNumber)?alert(fNumber):alert(sNumber);

// if(fNumber>sNumber){
//     alert(fNumber);
// }
// else{
//     alert(sNumber);
// }

//153 строка и строки между 155-160 равны по смыслу

// Task two
// let number = +prompt("Enter a number...");

// (number%5==0)?alert(true):alert(false);
// // условие?выражени1:выражение2

// if (number%5==0){
//     alert(true);
// }
// else{
//     alert(false);
// }

//169 строка и строки между 172-177 равны по смыслу

// // Task three

// let word = prompt("Enter your location: ");

// //(word == "Земля" || word == "земля")?alert("Привет, Землянин"):alert("привет, инопланетянин");

// (word.toLowerCase() == "земля")?alert("Привет, Землянин"):alert("привет, инопланетянин");

// // toLowerCase() делает все буквы строчными.

// if(word.toLowerCase() == "земля"){
//     alert("Привет, Землянин");
// }
// else{
//     alert("привет, инопланетянин");
// }

// // 187 ~ 191-196

// function check(numberOne, numberTwo){
//     if(numberOne>numberTwo){
//         return 1;
//     }
//     else if(numberOne<numberTwo ){
//         return -1;
//     }
//     else if(numberOne==numberTwo){
//         return 0;
//     }
//     else{
//         return "It's not a number.";
//     }
// }

// alert(check(2,2));

// function factorial(number){
//     return number?number*factorial(number-1):1;
// }

// alert(factorial(5));

// Рекурсия - функция вызывает саму себя внутри себя

alert(Math.PI)