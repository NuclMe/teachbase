// Написать функцию для реверсии слова не используя встроенные методы
// let word = 'hello,Jack'
// let ololo = [...word].reverse();
// console.log(ololo)
// это решение со встроеным методом reverse, я так понял, оно не подходит, поэтому думаю над другим

let reverseString = (str)=>{
    let stringRev = '';
    for(let i = 0; i<str.length;i++ ){
        stringRev =str[i] + stringRev;
    }
    return stringRev;
}
console.log(reverseString('word'))
// в этом способе каждый едемент становится в массив, потом при помощи унарного оператора + мы преобразуем массив в строку и записываем в переменную stringRev, и на каждой итерации наш stringRev равен одной или нескольким буквам(на поздних етапах цикла) и при повторении операции, новый символ проходит ту же процедуру и символ попадает слева от предыдущего
