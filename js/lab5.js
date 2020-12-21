const maxRand = 10000;

let randArray = [];

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