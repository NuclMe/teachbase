// С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник", должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр   

let GeometryData = function(){
    this.perCalc = function(){
        for(i=0; i<this.length; i++){
            (this[i] + this[i]) * 2
        }
    }   
    this.ploCalc = function(){
        Math.pow(this, 2)
    }
}
let Rectangle = function(){
    let b = 'white'
    console.log(b)
}

let Square =  function (){
    let a = 'black'
    console.log(a)
}

Rectangle.prototype = new GeometryData();
Square.prototype = new GeometryData();  


const gmail = new Rectangle()
const recper = Rectangle.perCalc(2,2,3,4)
console.log(recper)
 