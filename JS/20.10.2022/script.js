// function test(){
//     let input = document.querySelector('.hexInput')
//     let div = document.createElement('div');
//     div.className = "newDiv";
//     div.style.backgroundColor = `#${input.value}`
//     let main = document.querySelector('div.main');
//     console.log(main);
//     main.append(div);
// }

// let body = document.querySelector('body');

// function randColor(){
//     let a = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let c = Math.floor(Math.random() * 256);
//     document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
//     body.removeEventListener('mousemove', disco);
// }

// function disco(){
//     let a = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let c = Math.floor(Math.random() * 256);
//     document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
// }

// function discoMode(){
//     body.addEventListener('mousemove', disco);
// }

// function reset(){
//     document.body.style.backgroundColor = 'white';
//     body.removeEventListener('mousemove', disco);
// }

// function deleteDiv(){
//     let div = document.querySelector('div.newDiv');
//     div.style.display = 'none';
// }

// let time = document.getElementById('time');

// function getCurrentTime(){
//     return new Date().toTimeString();
// }

// setInterval(
//     () => time.innerHTML = getCurrentTime(),
//     1000
// );

keyinput.onkeydown = keyinput.onkeyup = keyinput.onkeypress = handle;

function handle(e) {
    let text = e.type + ' key=' + e.key +
    ' code=' + e.code +
    (e.shiftKey ? ' shiftkey' : '') + 
    (e.ctrlKey ? ' ctrlkey' : '') + 
    (e.altKey ? ' altkey' : '') + 
    (e.metaKey ? ' metakey' : '') + 
    (e.repeat ? '(repeat)' : '') + 
    "\n";

    area.value = text;
}