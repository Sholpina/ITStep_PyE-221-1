// Кнопка закрытия для имеющихся li

let myNodeList = getElementByTagName('li');
for(let i = 0; i < myNodeList.length; i++){
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.append(txt);
    myNodeList[i].append(span);
}


// Добавлем функцию удаления

let close = document.getElementsByClassName("close"); // ищем элементы с классом close
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}


// Добавляем проверку checked

let list = document.querySelector('ul') //  мы ищем элементы с тегом ul
list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toogle('checked');
    }
}, false);


// Создание элемента

function newElement(){
    let li = document.createElement('li'); // создаем элемент с тего li
    let input = document.getElementById('myInput'); // ищем элемент с id myInput
    let t = document.createTextNode(input.value); // значение нашего input переводим в текстовое значение
    li.append(t); // добавялем наше значение внутрь тега li
    if(input.value==""){ 
        alert("Please enter something");
    }
    else{
        document.getElementById('myUl').append(li);
    }
    input.value = "";

    let span = document.createElement("span"); // создаем элемент с тегом span
    let txt = document.createTextNode("\u00D7"); // создаем текстовый узел 
    span.className = "close"; // присваиваем класс close элементу span
    span.append(txt); // добавляем текст внутрь span
    li.append(span); // добавляем span внутрь li

    
    for(let i=0; i<close.length; i++){ // пробегаемся по HTML коллекции
        close[i].onclick = function(){ // создаем функцию которая будет удалять наш элемент при клике на span
            let div = this.parentElement; // обращаемся к parent элементу
            div.style.display = "none"; // удаляем наш элемент сделав его неотображаемым
        }
    }
}
