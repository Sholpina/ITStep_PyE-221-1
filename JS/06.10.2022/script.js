// Созадем кнопку закрытия

let myNodeList = document.getElementsByTagName('li');
for(let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(txt);
    myNodeList[i].appendChild(span);
}


// Добавляем функцию удаления

let close = document.getElementsByClassName('close');
for(let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


// Добавляем проверку checked 

let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle('checked');
    }
}, false);


// Создание нового элемента

function newElement(){
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.append(t);
    if (inputValue === ''){
        alert('Please enter something!');
    }else{
        document.getElementById('myUl').append(li);
    }
    document.getElementById('myInput').value = "";
    
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(txt);
    li.append(span);

    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}