/*


ldkfdsfdsf
dsfsdf
sdfdsf


*/



// Number  //Числа
// String   //Строки
// Boolean  //Булеан true/false (Истина или нет)
// undefined  //Неопределонное
// object //объект
// null //пустота

// let user = new Object();  // Объявление объекта
// user = {   // Задаем объекту его парамтеры
//     name: "John",
//     age: 30,
//     surname: "Doe",
//     hobby: "Play tennis"
// }

// alert(user.name);
// alert(user.surname);
// alert(user.age);
// alert(user.hobby);

// console.log(user.name);

// let age = 19;
// let name = "15";
// let check = false;
// var ageOfTheSecondSon = 20;

// alert(age)
// age = 22; // = это присваиевание 

// alert(age);
// const g = 9.8; // const - константа неизменаемая переменная
// alert(g);

// alert(age==g) // == проверка на равенство
// alert(age===g) // === проверка на идентичность

// alert(age=g);

// console.log()

// let someS = null;

// alert(someS == undefined)

// let sum = age + ageOfTheSecondSon;

// alert(age + ageOfTheSecondSon); 

// alert(name + age); // Number() Преобразовать в число     String() Преобразовать в строку 

// let userAge = prompt("Enter your age: "); //prompt получает тип данных string
// let userAgeSecond = +prompt("Enter your age: "); //+prompt получает тип данных number

//let check = confirm("Are you sure you want to check your age?");
// alert(userAge);
// alert(typeof(userAge)); //typeof позволяет узнать тип данных
//alert(check);

// PRACTICE WORK

// //Task one

// let Number = +prompt("Number: ");
// alert(Number**2); 

// //Task two

// let numberOne = +prompt("Number: ");
// let numberTwo = +prompt("Number: ");

// alert((numberOne+numberTwo)/2);

// // Task third

// let number = +prompt("Number: ");

// alert(number**2);

// //Task four

// let kilometres = +prompt("Kilometers: ");

// const toMiles = 0.621371;

// alert(kilometres*toMiles);

// //Sixth task

// let a = +prompt("Number: ");
// let b = +prompt("Number: ");

// let x = -b/a;

// alert(x);

// // Seventh task

// let hours = +prompt("Hours: ");
// let minutes = +prompt("Minutes: ");

// const minutesInOneDay = 1440;
// const minutesInHour = 60;

// let hoursToMinutes = hours * minutesInHour;

// let sumOfCurrentMinutes = minutes + hoursToMinutes;

// let minutesLeft = minutesInOneDay - sumOfCurrentMinutes;

// hours = Math.floor(minutesLeft / minutesInHour);   //Math.floor делает округление в меньшую сторону 12,1 ~ 12; 12.9 ~ 12
// minutes = minutesLeft % minutesInHour;

// alert(hours + ":" + minutes);

// // Eights task

// let number = +prompt("Number: ");

// alert(Math.floor(number/10)%10 )

// Ninth task

//#1
// let number = +prompt("Number: ");

// let fourDigits = Math.floor(number/10);
// let firsDigit = number%10;

// alert(firsDigit*10000 + fourDigits);

//#2
//let number = +prompt("Number: ");

//alert(String(number%10) + String(Math.floor(number/10)));

// // Tenth task

// let saleSum = +prompt("Sale Sum: ");

// const salary = 250;

// alert(salary+saleSum*0.1);