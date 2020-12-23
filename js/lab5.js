const maxRand = 10000;

let messId = 0;

let randArray = [];

let adjective=["Быстрый", "Большой", "Сильный", "Слабый", "Желтый", "Волшебный",
    "Скучный", "Великий", "Ужасный", "Золотой", "Классический", "Смешной",
    "Добрый", "Злой", "Мягкий", "Толстый", "Свежий", "Древний", "Сухой",
    "Низкий", "Народный", "Искренний", "Острый", "Пустой", "Гладкий", "Горячий"]

let noun=["котик", "ветер", "муравей", "хлеб", "человек", "овощ", "лимон",
    "кофе", "дедушка", "дом", "телефон", "стакан", "яблоко", "ремень", "камень",
    "блокнот", "мальчик", "глаз", "нос"]

let verb=["бежит", "гуляет", "плывет", "ждет", "прыгает", "плачет", "думает",
    "курит", "кушает", "спит", "играет", "улетает", "лежит", "умирает", "сидит",
    "уходит", "читает", "смотрит", "наблюдает", "слушает", "удивляется", "работает",
    "отдыхает"]

for (let i = 0; i < 1000; i++){
    randArray.push(getRandomInt(1, maxRand));
}

function printArray(array=randArray){
    console.log(randArray);
}

function min(array=randArray){
    let min = maxRand;
    for (let i = 0; i < array.length; i++)
        if (array[i] < min)
            min = array[i];
    console.log(min);
}

function max(array=randArray){
    let max = 0;
    for (let i = 0; i < array.length; i++)
        if (array[i] > max)
            max = array[i];
    console.log(max);
}

function med(array=randArray){
    let a = [];
    for (let i = 0; i < array.length; i++)
        a.push(array[i]);
    merge(a, 0, a.length - 1);
    console.log(a[~~(a.length / 2)]);
}

function merge(array=randArray, l = 0, r = randArray.length - 1){
    if (l >= r)
        return;

    let m = ~~((l + r) / 2);
    merge(array, l, m);
    merge(array, m + 1, r)

    let firstArray = [];
    for (let i = l; i < m + 1; i++)
        firstArray.push(array[i]);

    let secondArray = [];
    for (let i = m + 1; i < r + 1; i++)
        secondArray.push(array[i]);

    let i = 0, j = 0;
    for (let k = l; k <= r; k++)
        if ((i >= firstArray.length) || ((firstArray[i] > secondArray[j]) && (j < secondArray.length)))
            array[k] = secondArray[j++];
        else
            array[k] = firstArray[i++];
}

function countTeg() {
    let a = [];
    for (let i = 0; i < document.getElementsByTagName("*").length; i++){
        if (notFind(a, document.getElementsByTagName("*")[i].tagName))
            a.push((document.getElementsByTagName("*")[i].tagName));
    }

    for (let i = 0; i < a.length; i++)
        console.log(document.getElementsByTagName(a[i])[0].tagName, ':', document.getElementsByTagName(a[i]).length)
}

function clearConsole(){
    console.clear()
}

function notFind(array, str){
    let flag = true;
    for (let i = 0; i < array.length; i++)
        if (array[i] == str)
            flag = false;
    return flag
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function send(){
    let myLog = document.getElementById("messages");
    let myMassage = document.getElementById("mess");
    let myDiv = document.createElement("div");
    myLog.appendChild(myDiv);
    myLog.lastElementChild.className = "message"
    myLog.lastElementChild.innerHTML = myMassage.value + "    ";
    myLog.lastElementChild.scrollIntoView({alignToTop: "false", behavior: "smooth"});

    let ms = myMassage.value;

    myLog.lastElementChild.appendChild(document.createElement("button"));
    myLog.lastElementChild.lastElementChild.className = "exit";
    myLog.lastElementChild.lastElementChild.innerHTML = "x";
    myLog.lastElementChild.setAttribute("id", messId.toString());
    myLog.lastElementChild.lastElementChild.setAttribute("onclick", "del(" + messId.toString() +")");
    messId += 1;

    let f = document.getElementById("frm")
    f.elements['msg'].value = '';

    setTimeout(() => {
        myDiv = document.createElement("div");
        myLog.appendChild(myDiv);
        myLog.lastElementChild.className = "messageAnswer"

        if (ms == ""){
            myLog.lastElementChild.innerHTML = "Напишите что-нибудь :c"
        }
        else if (ms.substr(0, 5) == "calc ") {
            myLog.lastElementChild.innerHTML = math.evaluate(ms.substr(5, ms.length));
        }
        else {
                myLog.lastElementChild.innerHTML = adjective[getRandomInt(0, adjective.length - 1)] + " " +
                    noun[getRandomInt(0, noun.length - 1)] + " " +
                    verb[getRandomInt(0, verb.length - 1)];
        }
        myLog.lastElementChild.scrollIntoView({alignToTop: "false", behavior: "smooth"});
    }, 900)
}

function del(messId) {
    document.getElementById(messId).className = "messageNone"
}