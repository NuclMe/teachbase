// const Cat = function(name,age){
//     this.name = name;
//     this.age = age;
// }
//     function meov(){}

//     const alex = new Cat ('Alex',5)
// console.log(alex)

// class Cat2{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     meov(){
//         console.log(this.name + 'says MEOV!');
//     }
// }
// const bob = new Cat2('ololo',2)

// ПРИМЕР НА ПРОТОТИПАХ 
const Animal = function(){
    this.eat = function(){
        console.log('i eat');
    }
    this.sleep = function(){
        console.log('i sleep');
    }
}

const Cat = function(name){
    this.name = name;
    this.meov = function(){
        console.log(this.name + 'says meov');
    }
}

Cat.prototype = new Animal() 
const alex = new Cat('Alex')
console.log(alex)

// ТОТ ЖЕ ПРИМЕР НА КЛАССАХ
class Animal2{
    eat(){
        console.log('i eat');
    }
    sleep(){
        console.log('i sleep');
    }
}

class Cat2 extends Animal2{
    constructor(name){
        super() /* специальный метод, который создаст для нас this*/
        this.name = name
    }
    meov(){
        console.log(this.name + 'says meov')
    }
    static avaliableNames = ['Alex', 'bob' ]
}

const bob = new Cat2('Bob ')
const john = Cat2.avaliableNames
console.log(john)