// Модифицировать прототип Array, добавив в него метод shuffle, чтобы получить возможность выполнять случайную сортировку для любого массива

const list = [1,2,3,4,5,6,7,8,9,10];
const ololo = [1,333,477,88,0.44,211]

Array.prototype.shufle = function(arr) {
    this.sort( () => Math.random()- 0.5 )
    return this
}


console.log(list.shufle())
console.log(ololo.shufle())