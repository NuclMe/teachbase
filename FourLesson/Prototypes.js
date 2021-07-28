// // Прототип - специальный резервный обьект, в котором ищутся свойства, которые не найдены в оригинальном обьекте

// // как работают прототипы(очень похоже на замыкание) "цепочка прототипов"
// // 1)Ищем свойство в обьекте
// // 2)Если не найдено,ищем в прототипе 
// // 3) Если не нашли, то ищем в прототипе, прототипа
// // 4) Если дошли до самого верхнего уровня, то вернуть undefined  

// // как узнать прототип обьекта? 
// // 1 __proto__ - специальное свойство оьекта в котором находится ссылка на его прото (УСТАРЕЛО)
// // 2 Object.getPrototypeOf - рекомендуемый способ, просто передайте ваш обьект и получите на выходе его прототип 


// // Как задать прототип при использовании конструктора
// // Конструктор используется для создания множества обьектов
// // Для того, чтобы использовать задание прототипа конструктором, можно использовать специальное свойство prototype, которое имеет значение только для функции-конструктора

// // КАК можно задать прототип 
// // 1. Явно присвоить его через свойство __proto__
// // 2. Явно присвоить его через setPrototypeOf 
// // 3. Задать специальное свойство prototype функции-конструктору, тогда функция при вызове через new присвоит ему заданное значение прототипа новому обьекту 
// // 4. При создании через класс 

// // Instanceof - показывает кто у кого прототип, всю их цепочку 
// const list = []
// console.log(Object.setPrototypeOf(list,{}));
// console.log(
//     Object.setPrototypeOf(list,null));
// VM2162:2 []length: 0
// VM2162:3 []length: 0
// undefined
// const list = []
// console.log(Object.setPrototypeOf(list,{}));
// VM2211:2 []length: 0[[Prototype]]: Object[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// undefined
// list.this
// undefined
// const list = []
// console.log(Object.setPrototypeOf(list,{}));
// console.log(
//     Object.setPrototypeOf(list,null));
// VM2666:2 []
// VM2666:3 []length: 0
// undefined
// list.length
// 0
// const Cat = (name,age){
//     this.name = name;
//     this.age = age;
//  }

// VM3082:1 Uncaught SyntaxError: Unexpected token '{'
// const Cat = (name,age){
//     this.name = name;
//     this.age = age;
//  }

const Cat = function (name,age){
    this.name = name;
    this.age = age;

 }
Cat.prototype={
    walk : function(){console.log(this.name + 'is walking')}
}

// undefined
// bob
// undefined
const alex = new Cat('Alex',5)
const bob = new Cat('Bob',9)
// console.log(bob.walk())

const GmailClient = function(){

}
const OutlookClient = function(){
    this.sendToThread = function(){
        console.log('i sended to main thread')
    }
}

const EmailClient = function(){
    this.getPost = function(){
        console.log('i got post')
    }
    this.sendPost = function(){
        console.log('i sended post')
    }
}


GmailClient.prototype = new EmailClient()
OutlookClient.prototype = new EmailClient()

const gmail = new GmailClient()
const outlook = new OutlookClient()
const send = gmail.sendPost()
const thread = outlook.sendToThread()
console.log(send)