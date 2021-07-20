// Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой { word: 'smth', length: 1, isCapitalized: false}

// Тут я вывел как обьект результаты
const wordData = {
    word:'',
    length:Number,
    isCapitalized: Boolean,
    get fullName(){
        return`${wordData.word} ${wordData.length} ${wordData.isCapitalized}`
    },
    set fullName(value){
            const parts = value;
            this.word = parts;
            this.length = parts.length;
            this.isCapitalized = parts[0] === parts[0].toUpperCase()
    }   
}

wordData.fullName = 'smth'
console.log(wordData)

// тут пытался преобразовать в массив обьектов но на выходе получил только массив значений
// function toArray(item){
//     return (
//     Object.values(wordData))
// }
// console.log(toArray())



