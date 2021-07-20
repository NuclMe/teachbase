// Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:  
// const fruits = ['orange', 'apple', 'banana', 'strawberry']

// filterByLength(fruits, 0,5) // [‘apple’, ‘’]

// 1) перебрать массив reduce и записать значение в аккум
// 2) 
// function arrayFilter(){

// }
// console.log(arrayFilter(fruits,0,5))

const fruits = ['weweweorange', 'apple', 'banana', '']

function filterByLength(array, min, max) {
    return array.filter(function(item) {
        return item.length >= min && item.length <= max
    })
}

console.log(filterByLength(fruits, 0, 1))