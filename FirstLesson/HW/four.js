// Реализовать цикл перебирающий числа от одного до 20 и выводящий каждое четное значение на экран, реализация должна использовать все 3 вида циклов (отдельная реализация на каждый цикл)
let newArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// 1) for loop
// function genArr (arr) {
//     let someArr = [];
//     for(i=0; i < arr.length,i++;){
//         if(i%2 === 0){
//             someArr.push(i)
//         } else{
//             return null
//         }
//     }
// }
// 2)  do/while loop
function genArr(arr){
    let someArr = [];
        do{
            if(i%2 === 0){
                someArr.push(i)
            } 
            else{
                return null
            }
        } while(arr<arr.length)
}
// 3 while loop
    // function genArr(arr) {
    //     while(arr<arr.length){
    //         if(i%2 === 0){
    //             someArr.push(i)
    //         } 
    //         else{
    //             return null
    //         }
    //     }
    // }


console.log(genArr(newArr))
// 1) написать переменную ил массив, в котором юудут цифры до 20ти
// 2) написать и найти как засунуть эту переменную в цикл и пройтись по ней
// 3)  написать проверку, что если делится без остатка то показывать 