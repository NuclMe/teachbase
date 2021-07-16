// Написать функцию для реверсии слова не используя встроенные методы
let word = 'hello,Jack'
let reverse = (word)=>{
    let newWord = word.reverse().split().join()
    console.log(newWord)
}
reverse(word)