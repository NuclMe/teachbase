// Создать пустой объект и наполнить его данными:
// 1. Добавить свойство name и записать в него значение ‘Alex’
// 2. Добавить свойство lastName и записать в него значение ‘Smith’
// 3. Присвоить значение ‘Bob’ в свойство name
// 4. Удалить оба свойства
const superObj = {
    name:'Alex',
    lastName: 'Smith',
}
superObj.name = 'Bob'
delete superObj.name
delete superObj.lastName
console.log(superObj)