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
// в этом способе каждый едемент становится в массив, потом при помощи унарного оператора + мы преобразуем массив к строке и следующий символ попадает слева от предыдущего
