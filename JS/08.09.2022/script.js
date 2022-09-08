// let a = 10;
// let b = 15;

// function substraction(num1 = 25, num2 = 25){ 
//     return  // Возвращает значения.
// }

// alert(substraction());


// Рекурсия - это функция которая вызывает себя внутри себя.
// let n = 7;

// function factorial(n){
//     return n>0?n*factorial(n-1):1;  // Решение факториала через тернарные операторы
// }

// // function factorial(n){   // Решение факториала через условные операторы
// //     if(n){
// //         return n*factorial(n-1);
// //     }
// //     else{
// //         return 1;
// //     }
// // }

// alert(factorial(n));


// PRACTICE

// // Task one

// let a = +prompt("Enter your number"); 
// let b = +prompt("Enter your number");

// function min(a, b){
//     //return a>b?b:a;
//     if(a>b){
//         return b;
//     }
//     else{
//         return a;
//     }
// }

// alert(min(a,b));

// // Task two

// let num = 5;
// let pow = 4;

// function powerOf(a, b){
//     return Math.pow(a, b);
//     //return a**b;
// }

// alert(powerOf(num, pow));

// // Task three

// let fNumber = +prompt("Enter your number");
// let sNumber = +prompt("Enter your number");
// let sign = prompt("Enter your sign");

// function calculator(num1, num2, sign){
//     switch(sign){
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/': num1 / num2;
//     }
// }

// alert(calculator(fNumber, sNumber, sign));

// function isPrime(num){
//     for(let i=2; i<num; i++){
//         if(num%i==0){
//             return true;
//         }
//         else return false;
//     }
// }


// if (isPrime(7)){
//     alert("non prime")
// }
// else{
//     alert("prime")
// }

// let a = +prompt("Enter your number");
// let b = +prompt("Enter your number");

// function mod(a, b){
//     while(a > b){
//         a -= b;
//     }
//     return a;
// }

// alert(mod(a,b));

// let a = +prompt("Enter your number");
// let b = +prompt("Enter your number");
// let c = +prompt("Enter your number");
// let d = +prompt("Enter your number");
// let e = +prompt("Enter your number");

// function sum(num1, num2 = 0, num3 = 0, num4 = 0, num5 = 0){
//     return num1 + num2+num3+num4+num5;
// }

// alert(sum(a,b,c,d,e));

// let a = +prompt("Enter your number");
// let b = +prompt("Enter your number");
// let c = +prompt("Enter your number");
// let d = +prompt("Enter your number");
// let e = +prompt("Enter your number");

// let maximum = 0;

// function max(num1, num2 = 0, num3 = 0, num4 = 0, num5 = 0){
//     // return Math.max(num1, num2, num3, num4,num5);
//     let arr = [];
//     arr.push(num1);
//     arr.push(num2);
//     arr.push(num3);
//     arr.push(num4);
//     arr.push(num5);
    
//     let al = arr.length;
    
//     while(al--){
//         if(arr[al] > maximum){
//             maximum = arr[al];
//         }
//     }
//     return maximum;

// }

// alert(max(a,b,c,d,e));

// let num1 = +prompt("Enter your number");
// let num2 = +prompt("Enter your number");
// let oddEven = confirm("Odd or even");

// let arr = [];

// function task9(num1, num2, oddEven) {
//     for (let i = num1; i < num2; i++){
//         if (oddEven){
//             if (i % 2 == 0) {
//                 arr.push(i);
//             }
//         }
//         if (!oddEven){
//             if (i % 2 != 0) {
//                 arr.push(i);
//             }
//         }
//     }
//     return arr;
// }

// alert(task9(num1, num2, oddEven));


let day = +prompt("Enter which day");
let month = +prompt("Enter month");
let year = +prompt("Enter year");

function leapYear(year){
    if(year%400==0){
        return true;
    }
    else if(year%4==0 && year%100!=0){
        return true;
    }
    else return false;
}

function nextDay(day, month, year){
    if(month == 2 && leapYear(year)){
        if(day != 29){
            day++;
            return `${day}.${month}.${year}`;
        }
        else{
            day = 1;
            month++;
            return `${day}.${month}.${year}`;
        }
    }
    else if(month == 2 && !leapYear(year)){
        if(day != 28){
            day++;
            return `${day}.${month}.${year}`;
        }
        else{
            day = 1;
            month++;
            return `${day}.${month}.${year}`;
        }
    }
    else if(month == 4 || month == 6 || month == 9 || month == 11 && day!=30){
        day++;
        return `${day}.${month}.${year}`;
    }
    else if(month == 4 || month == 6 || month == 9 || month == 11 && day==30){
        day = 1;
        month++;
        return `${day}.${month}.${year}`;
    }
    else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 && day != 31){
        day++;
        return `${day}.${month}.${year}`;
    }
    else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 && day == 31){
        day=1;
        month++;
        return `${day}.${month}.${year}`;
    }
}

alert(nextDay(day, month, year));