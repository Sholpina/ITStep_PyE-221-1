// let a = 5;
// let b = 6;
// let username = "ASDASD"
// function myFunction(a, b){
//     let count = 2;
//     return b;
// }
// alert(myFunction(a));
// alert(count);

// function isLeap(year){
//     if(year%400 == 0 || year%100 != 0 && year%4==0){
//         alert("year is leap");
//     }
//     else{
//         alert("year is not leap");
//     }
// }


// isLeap(year1);
// isLeap(year2);
// isLeap(year3);
// isLeap(year4);
// isLeap(year5);

// let user = new Object();
// user = {
//     login: "vilo17",
//     password: "17vilo",
//     name: "Victor",
//     age: 30,
//     "Full name": "Victor Dobrov"
// }

// alert(user.name);

// alert(user["Full name"]);

// user["Full name"] = "VASD dSsd";

// alert(user["Full name"]);

// let key = prompt("What do you want to know");

// alert(user[key]);

// alert(user.key)

// class User {
//     constructor(name){
//         this.name = name;
//     }
//     saySmth(){
//         alert(this.name);
//     }
// }

// let user = new User("John");
// user.saySmth();

// class Animal{
//     constructor(name){
//         this.name = name;
//         this.isWild = true;
//         this.speed = 0;
//     }
//     move(speed){
//         this.speed = speed;
//         alert(`Speed of ${this.name} is ${speed}`);
//     }
//     wildOrNot(isWild){
//         this.isWild = this.isWild;
//         if(isWild){
//             alert(`${this.name} is wild`);
//         }
//         else alert(`${this.name} is not wild`);
//     }
// }

// class Dog extends Animal{
//     bark(){
//         alert(`${this.name} is barkiing`);
//     }
// }

// let dog = new Dog("Labrador");

// dog.bark();
// dog.move(5);
// dog.wildOrNot(false);

// let user = {
//     name: "John",
//     surname: "Wick",
//     id: 8858
// }

// user.allInfo = function(){
//     return `${this.name} ${this.surname} ${this.id}`;
// }

// alert(user.allInfo());

// let userDay = prompt("Which day");
// let userMonth = prompt("Which month");
// let userYear = prompt("Which year");

// function isLeap(year){
//     if(year%4==0 && year%100 != 0) return true;
//     else if(year%400 == 0) return true;
//     else return false;
// }

// function nextDay(day, month, year){
//     if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 && day == 31){
//         day = 1;
//         month++;
//     }
//     else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 && day != 31){
//         day++;
//     }
//     else if(month == 4 || month == 6 || month == 9 || month == 11 && day == 30){
//         day = 1;
//         month++;
//     }
//     else if(month == 4 || month == 6 || month == 9 || month == 11 && day != 30){
//         day++;
//     }
//     else if(month == 2 && isLeap(year) && day ==29){
//         day = 1;
//         month++;
//     }
//     else if(month == 2 && isLeap(year) && day ==29){
//         day++;
//     }

//     return `${day}.${month}.${year}`
// }

// alert(nextDay(userDay, userMonth, userYear)); 

// class Human{
//     constructor(){
//         this.textNumber = function(number){
//             let oneToNine = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//             let tenToTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineten', 'Twenty'];
//             let twentyTONinety = ['Twenty', 'Thirty', 'Fourty', 'Fivety', 'Sixty', 'Seventy', 'Eightty', 'Ninety'];
//             if(number > 0 && number <=9){
//                 return oneToNine[number-1];
//             }
//             else if(number >= 10 && number <= 20){
//                 let str = `${number}`;
//                 str = str.split('');
//                 let secondDigit = str[1];
//                 return tenToTwenty[secondDigit];
//             }
//             else if(number >= 20 && number <=99){
//                 let str = `${number}`;
//                 str = str.split('');
//                 let firstDigit = str[0];
//                 let secondDigit = str[1];
//                 return `${twentyTONinety[firstDigit-2]} ${oneToNine[secondDigit-1]}`;
//             }
//         }
//     }
// }

// let textNum = new Human();

// alert(textNum.textNumber(25));