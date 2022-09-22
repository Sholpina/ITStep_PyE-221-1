// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// months[1] = 'March';

// alert(months);

// let fruits = ['Apple', 'Orange'];

// fruits[2] = 'Pear';

// alert(fruits);
// alert(fruits[3]);
// push() // добавление элементов в конец массива
// pop() // удаление элементов с конца массива
// unshift() // добавление элементов в начало массива
// shift() // удаление элементов с начала массива



// fruits.push('Pineapple');
// fruits.unshift('Mango');

// fruits[3] = 'Lime';

// alert(fruits);

// let num = +prompt("Enter the number")

// let arr = [];

// for(let i = 0; i < num; i++){
//     let arrNum = +prompt("Enter the number")
//     arr.push(arrNum);
// }

// alert(arr);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// console.log(matrix[2][1]);

// let fruits = ['Apple', 'Orange'];

// fruits[2] = 'Pear';

// fruits.push('Pineapple');
// fruits.unshift('Mango');

// fruits[3] = 'Lime';

// delete fruits[3];

// alert(fruits);

// let newArr = fruits.splice(-2, 2);

// alert(newArr);

// let newArr = fruits.slice(-2);

// alert(newArr);

// alert(fruits.indexOf('Lime'));
// alert(fruits.includes('Lime'));
// alert(fruits.includes('Tomato'));

// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < (arr.length-i-1); j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// let arr = [5, 3, 2, 18, 22, 1, 9, 18];

// // bubbleSort(arr);

// alert(arr.reverse());

// let str = 'one two three four';

// let arr = str.split(' ');

// alert(arr);

// str = arr.join('/');

// alert(str);

function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

let arr = [8,6,3,6,1];

alert(bubbleSort(arr).reverse());

