// У обьектов может быть как и свойства
// const phone =  {
//     color: red,
// }
// так и методы. Методами называется функция записанная как значение
// const cat = {
//     cat:function(){
//         console.log('meov')
//     }
// }

// работа со свойствами обьектов

// 1) через точку
    // ЧТЕНИЕ cat.name
    // ЗАПИСЬ cat.name = 'John'
    // УДАЛЕНИЕ delete cat.name
// 2) через квадратные скобки
    // ЧТЕНИЕ cat['name']
    // cat['name'] = 'John'
    // delete cat['name']


// разница между записью такова, если мы передадим название переменной внутри квадратных скобок оно как ключ запишет ее значение а если мы пердадим название переменной через точку то оно перезапишет 
var o = {
    name:10
}
// o['test'] = 5


var name = 'names'
o.name = 11
// console.log(o)

// Как можно создать обьект 
// 1) литералл const cat = {
    // color:brown
// } 

// 2) конструктор Object 
// const cat = new Object({
//     color: black
// })
// 3) когда нужно настраивать свойства обьекта Object.create
// используем когда необходимо создать обьект с более серьезными свойствами чем просто ключ и значение   
// Как пример, неизменяемо свойство coolor можно сделать или высчитывать каждыц раз новую инфу надо
// Тут на помощь приходят дескрипторы. Дескриптор позволяет внести изменение в поведение какого-то свойства обьекта, добавить или наоборот,запретить дополнительные действия
// самые популярные 
// get/set - геттеры и сеттеры
// writable
// configurable запрещают/разрешают удаление свойств
// Когда нужно создавать много обьектов которые немного отличаются друг от друга
// 4) функция конструктор 
// 5) классы  

                                // ДЕСКРИПТОРЫ

// const human = Object.create({},{
//         name: {
//             value: 'Ivan',
//             writable:true,
//         },
//         id:{
//             value:'1212',
//             writable:false,
//         }

//     }
// )

// human.name = 'Alex'
// delete human.name
// console.log(human.name)

// const clock = {
//     getCurrentTime: function(){
//         return new Date()
//     }
// };
// console.log(clock.getCurrentTime())

// геттеры (получить доступ к свойствам)

// const clock = Object.create({},{
//     time: {
//         get: function (){
//             return new Date()
//         }
//     }
// })
// console.log(clock.time)

// сеттер (измениить свойства)
const clock = Object.create({},{
    fullTime:{
        set:  function(value){
            [this.hours,this.minutes,this.seconds] = value.split(':')
        },
        get(){
            return `${this.hours}:${this.minutes}:${this.seconds}`
        }
    }
})
clock.fullTime = '12:56:66'
// console.log(clock)
console.log(clock.fullTime)