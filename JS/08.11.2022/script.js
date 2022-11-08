// function loadDoc(){
//     console.log('test');
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function(){
//         document.getElementsByClassName('change')[0].innerHTML = this.responseText;
//         console.log('test');
//     }
//     xhttp.open('GET', 'ajax.txt');
//     xhttp.send();
// }

let student = {
    name: 'AAA',
    age: 225,
    courses: ['frontend', 'backend', 'design'],
    hello(){
        console.log('Hello');
    },
    future: undefined
}

console.log(student);

let json = JSON.stringify(student);
console.log(JSON.stringify(student));
console.log(json);
console.log(typeof json);

json = JSON.parse(json);

console.log(json);
console.log(typeof json);
