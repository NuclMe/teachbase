// Реализовать функцию для фильтрации массива чисел по убыванию
const numbers = [-20, -10, 0, 10, 20, 30]

function sortDesc(a,b){
    return b - a
    // if(a<b){
    //     return 1;
    // }else if(a>b){
    //     return -1

    // } else{
    //     return 0
    // }
}
const sortedByAge = numbers.sort(sortDesc);
console.log(sortedByAge)
// console.log(sortDesc(numbers.sort(sortDesc)))
// sortDesc(numbers.sort(sortDesc)) // [30, 20, 10, 0, -10, -20]