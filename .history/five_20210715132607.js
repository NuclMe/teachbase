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
let data = {
     age: 18,
     paid: true,
     blocked: false,
     badUsername: false,
     isAdmin: false
    }
function check(obj){
    if(data.isAdmin:true){
        enter = true;
        console.log('welcome')
    }
    else if(age<18){
        enter = true;
        console.log('welcome')
    }
    else if(age>35){
        enter = true;
        console.log('welcome')
    }
    else if(monthSubsc = true){
        enter = true;
    }
    else if(monthSubsc = true){
        enter = true;
    }

}
check(data)
// Переписать if с помощью тернарного оператора ( Да, это будет выглядеть страшно )
