// Написать функцию для реверсии слова не используя встроенные методы
let word = 'hello,Jack'
let ololo = [...word]
let reverse = (word)=>{
    let newWord = word.reverse().split().join()
    console.log(newWord)
}
reverse(word)