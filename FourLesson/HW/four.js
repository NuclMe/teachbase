// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей 

// Для моторных кораблей доступны следующие специфичные характеристики:
// Мощность двигателя
// Материал корпуса

// Для парусных кораблей доступны следующие специфичные характеристики:
// Количество мачт
// Общая площадь парусов

// Что можно делать в верфи:
// Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Ремонтировать корабли - boatParamsДолжен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа

// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы. Задание потребует воспользоваться гуглом для решения. 

// Верфи и корабли должны создаваться с помощью функций-конструкторов.

// План 
// 1) Есть общий прототип Верфь в котором можно будет делать разные вещи, но или для всех кораблей или только для кораблей своего типа 
    // Для всех
        // Перекрашивать корабли - Можно красить любые корабли
    // Проверка по типу
        // Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
        // Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
        // Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// 2) От прототипа верфь, наследуются 2 типа верфей, моторыне и парусные, у них есть свои специфические хар-ки
    // Для моторных кораблей доступны следующие специфичные характеристики:
    // Мощность двигателя
    // Материал корпуса

    // Для парусных кораблей доступны следующие специфичные характеристики:
    // Количество мачт
    // Общая площадь парусов
// const Shipyard = function(yacht,motor){
//     this.yacht = {'yacht':yacht} 
//     this.motor = {"motor":motor} 
    
//     this.paintShip = function(){
//         console.log('poop')
//     }
//     this.swapShip = function(){
//         if(shiptype=shiptype){
//             console.log('i swaped ship')
//         }
//     };
// } 
// var person = new Shipyard('yacht')
// console.log(person.yacht)

const shipyardProto = {
    // метод проверки входящей лодки. проверяем и возвращяем лодку присваивая ее в перменную?? this.boatClass
    _checkBoatInstance: function(boat){
        if(typeof boat === 'function'){
            return boat === this.boatClass;
        }
        // сравниваем с обьектом и проверяем является ли он унаследованым от boat
        if(typeof boat === 'object'){
            return boat instanceof this.boatClass; 
        }   
    },

    paint:function(boat,color){
        boat.color = color;
        console.log(`Our ${boat} was painted in ${color} color`) 
    },

    swapShip:function(boatClass,boatParams){
        return this._checkBoatInstance(boatClass)?
        new boatClass(boatParams) : {error: 'Invalid instance'};
    },
    build:function(boatClass,boatParams){
        return this._checkBoatInstance(boatClass)?
        new boatClass(boatParams) : {error: 'Invalid instance'};
    },
    
    repair:function(boat){
        if(this._checkBoatInstance(boat)){
            boat.repaired = true;
            console.log('i repaired tbe boat', boat)
        }
        else{
            console.log( 'Invalid instance');
        }
    },
}

function MotorShip(){
    this.boatClass = MotorBoat;
}
function SailShip(){
    this.boatClass = SailBoat;
}
function MotorBoat(capacity,material){
    this.capacity = capacity;
    this.material = material;
}

function SailBoat(mast,sails){
    this.mast = mast;
    this.sails = sails;
}

MotorShip.prototype = shipyardProto;
SailShip.prototype = shipyardProto;

const VarMotorBoat = new MotorShip()
const VarSailBoat = new SailShip()

const motorboat = VarMotorBoat.build(MotorBoat,{
    power:45,
    material:'steel'
})
const sailboat = VarSailBoat.build(SailBoat,{
    mast:5,
    sails:3,
})
console.log(motorboat)
console.log(sailboat)

const paintMoto = VarMotorBoat.paint(motorboat,'red')

console.log(paintMoto)

const changeShip = VarSailBoat.swapShip(SailBoat)
console.log(changeShip)

const repairShip = VarMotorBoat.repair(motorboat)
console.log(repairShip)