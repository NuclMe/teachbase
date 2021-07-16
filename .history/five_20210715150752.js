// Реализовать if для проверки доступа
// Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
// 1. Возраст от 18 до 35 лет
// 2. Оплачена месячная подписка
// 3. Не действует блокировка
// 4. Имя пользователя не содержит внутри себя запрещенные слова
// Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия
// Информация о пользователе хранится в объекте такого вида:
// {
//  age: 18,
//  paid: true,
//  blocked: false,
//  badUsername: false,
//  isAdmin: false
// }
let data= {
     age: 18,
     paid: true,
     blocked: false,
     badUsername: false,
     isAdmin: false
    }
// function check(userData){
//     let acsess = false;
//     if ( userData.isAdmin && userData.age >= 18 && userData.age<=35){
//         acsess = true
//     } else if(userData.age >= 18 && userData.age<=35 && userData.paid && !userData.blocked && !userData.badUsername ){
//         acsess = true
//     }
//     else{
//         acsess = false
//         console.log('go away')
//     }
//     return acsess

// }
// console.log(check(data))



function ternarCheck(){
    return userData.isAdmin && userData.age >= 18 && userData.age<=35
}
ternarCheck(data)
// Переписать if с помощью тернарного оператора ( Да, это будет выглядеть страшно )
