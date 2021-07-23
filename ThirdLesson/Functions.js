// Обьявдление функций
// 1) Function declaration - всплывает обьявление функции 
function someFunc(){

}
// 2) Function expression 
const func = function(){

}
// 3 Arrow functions
const someFunction = () => {

}
// Аргументы и параметры функции 
// Аругментами и параметрами функции называются значения. которые передаются в функцию
// Это одна и та же сущность, но с разных точек зрения
// Снаружи передается аргумент
// Внутри получаем параметр

// в этом примере аргумент 'hello world' и параметр это одно и тоже 
// function print(word){
//     console.log(word)
// }
// print('hello world')

// function name(a,b){

// }
// print(8,9) // это аргументы, которые передаются в параметры a и b. A и B являются по сути массивом обьектов, мы в них записываем значения аргументов

// ЗАМЫКАНИЯ И КОНТЕКСТ 
// 1) По праву считаются двумя самыми сложными базовыми понятиями js 
// 2) Замыкание - это окружение, в котором функция была создана
// 3) Контекст - это окружение, в котором она была вызвана

// Лексическое окружение 
// При создани каждой функции в ней создается специальный служебный обьект, лексическое окружение в котором содержатся все переменные и функции созданные внутри этой
// Также лексическое окружение содержит ссылку на лексическое окружение родителя
// Алгоритм лексического окружения
// 1) В первую очередь переменная ищется в своем лексическом окружении 
// 2) Потом в родительском
// 3) Поиск в родителе родителя и так далее, до тех пока переменная не будет найдена
// 4) если дошел до window - бей ошибку

// Замыкание - это цепочка всех доступных для функции лексических окружений, вплоть до обьекта window
// Контест вызова -  обьект, в контексте которого выполняется функция

// This бывают 4 видов
// 1) this - отдельный вызов функции
// const test = function(){
// console.log(this)
// }
// test()
// если тут не поставлен `use strict` , то наш this будет равен window, если строгий режим будет, то будет undefined 
// 2)  как метод обьекта 
// когда нам нужно получить доступ к данным, которые хранятся в этом обьекте
const test = function(){
    console.log(this)
}
const someObject = {
    func:test,
}
console.log(someObject.func())
// THIS - это обьект перед точкой
// 3) функция конструктор  
// функция-конструктор позволяет создавать обьекты любая функция может быть вызвана, как конструктор с помощью ключевого слова new добавленого перед вызовом функции

// обычная функция 
const test = function(){
    console.log(this)
}
const result = test()

const test = function(){
    console.log(this)
}
const result = new test()

// Что происходит при вызове конструктора? 
// 1) Перед началом выполнения функции создается пустой обьект this
// 2) После завершения работы функции в случае отсутствия return в ней будет возвращен this
// Что произойдет. если в функции есть return ?
// Возвращает примитивное значение
// Возврат игнорируется, но все равно возвращаем this
// Возвращаем комплексное значение(например,другой обьект или массив)
// Возвращает этот обьект, this игнорируется

// This явное задание 
// Call,apply,bind
// bind насегда фиксирует this 
// call apply
// call вызывается с одним аргументом и apply позволяет передать целый массив аргументов 

// при обьявлении стрелочной функции у нее сразуфиксируется this, и он не меняется в момент выполнения функции 


