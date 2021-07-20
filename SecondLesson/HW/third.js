// Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:  
const fruits = ['orange', 'apple', 'banana', 'strawberry']

// filterByLength(fruits, 0,5) // [‘apple’, ‘’]

// 1) перебрать массив reduce и записать значение в аккум
// 2) 
const filterByLength = (arr, min, max) => {
    if(!Array.isArray(arr)){
        сonsole.log('First argument must be an array!');
        return false;       
    }
    if(Array.isArray && !arr.length){
        console.log('Array can`t be empty')
        return false;
    }
    if(typeof min !== 'number' || typeof max !== 'number'){
        console.log('min or max arguments type error(must be a number)');
        return false;
    }
    if(min>max){
        console.log('min can`t be more than max');
        return false;   
    }


  
    return arr.filter(word => word.length >= min && word.length <= max);

    // function filterByLength(array, min, max) {
    //     return array.filter(function(item) {
    //         return item.length >= min && item.length <= max
    //     })
    // }
}

console.log(filterByLength(['orange', 'apple', 'banana', 'strawberry'], 0,5))
console.log(filterByLength(['orange', 'apple', 'banana', ''], 0, 5));
