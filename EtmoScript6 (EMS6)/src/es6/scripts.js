"use strict";

window.onload = function (e) {
    // Области видимости переменных при ппомощи let и var
    //areaOfVisibility();

    // const - новое в ES6
    // let resultConst = checkConst();
    // console.log(resultConst);
    // resultConst = 100; // тут мы уже не связаны с константой просто получили значени результата функции
    // console.log(resultConst);

    // Замыкания https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
    // var myFunc = makeFunc();
    // myFunc();

    // Определение параметров функций по умолчанию
    // timer(5); // результат 5
    // timer(); // результат 60
    // timer(0); // будет опять 60 если по старому без воркэраунда
    // timerNew(0); // будет 0

    // Троеточие ... (он же arguments), Варианты for (in, each)
    // some('Alex',5,7,3,4); // по старому все будет в одном массиве arguments
    // someGrades('Alex', 'Chem', 5,7,3,4); // по новому только цифры попадут в массив за счет ... перед marks

    // Новое в строках
    // let str = exampleString('Alex', 'Chem', 5,7,3,4);
    // document.querySelector('.res').innerHTML = str;

    // Срелочные вызовы
    // strelochnie(); // в общем различие в синтаксисе
    newStrelochnie();
}

function areaOfVisibility() {

    /* let (замена var но тогда зона видимости ограничивается {} даже если это цикл)
     const (константа) */

    for(let i=0; i<5; i++) {
        console.log('При помощи let видно i: ' + i);
        var a = 14;
    }

    try {
        console.log('А вот тут объявленная при помощи let не видно i:' + i);
    } catch (err) {
        console.log('Объявленная при помощи let переменная i не видна дальше цикла');
    }

    console.log('Но то что объявлено при помощи var видно a: ' + a);

}

function checkConst() {
    const test = 50;
    // test = 100; не сработает, т.к. нельзя переопределять константы
    // const test = 100; - нет

    // константа содержащая объект
    const settings = {
        a: 10,
        b: 20,
        c: 30
    };

    // settings = [a: 5] // переопределение свойства объекта не сработает
    settings.a = 15; // таким образом можно поменять значение свойства объекта объявленного константой
    settings.d = 15; // тоже сработает, будет добавлено свойство d со значением 15

    return test;
}

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
};

function timer(t) {
    // let time = t || 60; // по старому - чтобы переменную t если она не передана (или равна 0 или пустая строка) сделать равной 60 по умолчанию
    let time = (typeof t === 'undefined') ? 60 : t; // воркэраунд для старого способа чтобы переданный 0 оставался 0, а undefined продолжал превращаться в значение по умолчанию
    console.log(time);

}

function timerNew(time = 60) {
    console.log(time);
}

function some(){
    console.log(arguments);
}

function someGrades(name, lastname, ...marks) {
    console.log(name);
    console.log(marks);

    for (let m in marks) { // for in перебирает ключи массива
        console.log(m);
        console.log(marks[m]);
    }

    for (let m of marks) { // for of перебирает элементы массива аналог forEach из PHP
        console.log(m);
    }

}

function exampleString(name, lastname, ...marks) {
    console.log(name);
    console.log(lastname);
    console.log(marks);

    let sum = 0;

    for (let m of marks) { // for of перебирает элементы массива аналог forEach из PHP
        sum += m;
    }

    let avg = (sum / marks.length).toFixed(2);
    //let res = '<div>' + name + ' '+ lastname + ' <strong>' + avg + '</strong></div>'; // старый вариант
    let res = `<div>${name} ${lastname} <strong>${avg}</strong></div>`; // по новому, обертка сделана обратной кавычкой которая на букве Ё

    return res;
}

// вывод стрелки в отличие от слов function не в том чтобы стрелку писать. Суть в другом.
function strelochnie() {

    let nz = (x, y) => x + 1; // новый вариант (фигурные скобки не используются если только однострочная команда)

    let devide = (x, y) => { // новый с фигурными скобками
        if(y === 0) {
            return null;
        }
        return x/y;
    }

    // аналогично следующему старому варианту
    let nz = function(x, y) {
        return x + y + 1;
    }

}

function newStrelochnie() {

    let t1 = new newTimer(100);
    t1.run();

}

// старый вариант объекта в JavaScript (функция конструирует объект)
function newTimer(t) {
    this.time = t;
    this.tick = function () {
        this.time--;
        console.log(this.time);
    }

    // this.run = function () {
    //     var that = this; // ложное сохранение контектса. Иначе в this ниже находится контекст windows
    //
    //     setInterval(function(){
    //         that.tick();}, 1000);
    // }

    // Вот зачем нам =>
    this.run = function () {
        setInterval(() => { // сохраняет контекст newTimer в this
            this.tick();
            }, 1000);
    }
}