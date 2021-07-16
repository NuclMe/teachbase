// console.log(Math.max(1,3,4,7,'8'))
// console.log(Math.min(1,3,'0'))

// const number = 3.54;
// console.log(Math.floor(number)) // округляет вниз
// console.log(Math.ceil(number)) // округляет вверх
// console.log(Math.round(number)) // округляет согласно правила математики

// console.log(Math.abs(-1)) // если отрицательное, то его противоволожность 
// console.log(Math.abs(1)) // если положительное, само число

// методы строк
// trim - обрезать пробельные символы в начале и в конце строки 
// toUpper/toLoverCase - к верхнему и нижнему регистру 
// indexOf,LastIndexOf - вхождение подстроки в строку и возвращать номер символа, на котором это вхождение встречается , indexOF - первое, lastIndex последнее
// substr - извлечь подстроку заданной длинны
// replace - поиск и замену подстроки в строке или поиск по регулярному выражению
// split  - по заданому разделителю разделить строку на массив данных


// Приведение строки к boolean 
// true - строки где есть любой символ
// false - пустые строки


// Приведение строки к числу
// parseInt('2121.45oioi') // 2121
// parseFloat('2121.45oioi') // 2121.45 (для чисел с плавающей точкой)
// метод выкинет все, что не число, но только до первого "не числа" , если будет что типо "2121фффвв333" то он выкинет только 2121, не будет клеить к ней 333 

// boolean
// String(true) //'true'
// String(false)  // 'false'

// undefined
    // Number(undefined) // NaN
    // Number(undefined) // 'string'
    // Boolean(undefined) //false

// null
//  под капотом - обьект

 // Number(null) // 0
 // String(null) // 'null'
 // Boolean(null) // false

//  object - совокупность пар ключ значение, ключ - строка, значение - все что угодно

// Number(object) //NaN
// String(object) //'[object,Object]'
// Boolean(object) //true

// Array - тип данных в идеале для хранения типов данных однородной структуры или одного типа данных

// Number([]) //0
// Number([1,2,3]) //1,2,3
// Number([123,321]) //NaN

// String([]) пустая строка
// String([123,456,567]) // '123,456,567'

// Boolean
// Любой массив приведенный к boolean будет равен true
// Boolean([]) // true

// Functions

// ПЕРЕДАЧА ПО ЗНАЧЕНИЮ
// в этом примере у нас есть 2 отдельные области в котором хранится по 1 копии еденицы, которые совершенно никак не связанны между собой
// var i = 2;
// var k = i;
// k=1;
// console.log(k,i)


// ПЕРЕДАЧА ПО ССЫЛКЕ
// в этом примере у нас есть ссылка на 1 обьект и когда мы сравниваем два массива, то они никогда не будудт равны, потому что имеют ссылку на разное место в памяти

var o = {};
var j = {};
var k = j;
console.log(k===j)
k.name = 'Alex'
k = null;
// ссылка на обьект на 81 строке стерта и мы новую создали тут, будет в консоли {name: 'Alex} null
console.log(j,k)

// Примитивные типы передаются по значению
// Комплексные по ссылке


// ПРИМЕР РАБОТАЕТ ТОЛЬКО С ДОПОЛНЕНИЕМ/ИЗМЕНЕНИЕМ МАССИВА ИЛИ ОБЬЕКТА
// let a = [1,2,3]
// let b = a;
// b[0] = '!'; // меняем массив из переменной b
// console.log(a[0]); // выведет '!' - переменная a тоже поменялась

// НО ЕСЛИ МЫ БУДЕМ ТАК ДЕЛАТЬ С ПРИМИТИВАМИ, ТО У НАС БУДЕТ ВЫВОДИТЬСЯ ТОЛЬКО МАССИВ И ОБЬЕКТ 
// let a = [1, 2, 3];
// let b = a; // на объект ссылается и a, и b


// a = 'primitive'; // запишем в a какой-то примитив
// console.log(b); // выведет [1, 2, 3]