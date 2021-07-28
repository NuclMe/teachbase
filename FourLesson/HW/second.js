// С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник", должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр   
// План
// 1) Сделать 1 прототип внутри которого будет 2 метода - вычесления периметра и площади 
// 2) Создать 2 функции треугольник и квадрат 
// 3) Сделать прототип 1го метода для 2х фигур


let GeometryData = {
    ploshadCalc(){
     return this.a * this.b
    }, 

    perimetrCalc(){
       return (this.a + this.b) * 2
    }
}
function Rectangle(a,b){
    this.b = b
    this.a = a
}

function Square(a){
    this.b = a
    this.a = a
}

Rectangle.prototype = GeometryData;
Square.prototype = GeometryData;  

const Rectangle1 = new Rectangle(3,4)
const Square1 = new Square(4)
console.log(Rectangle1.perimetrCalc())
console.log(Rectangle1.ploshadCalc())



 