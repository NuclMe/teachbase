// Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам =

// Есть следующее расширение объектов = 
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
// Есть следующий объект, в котором свойства лежат кучей =
// const john  = {
//   name = "John",
//   lastName = "Smith",
//   position = "Senior engineer",
//   startDate = "10.10.1990",
//   endDate = "10.10.2000",
//   baseSalary = "10000",
//   salaryCurrency = "$",
//   location = "Ukraine",
//   department = "IT",
//   phoneNumber = "+1234567890",    
//   eat = function() {},
//   sleep = function() {},
//   callFriend = function() {},
//   writeReport = function() {},
//   organizeMeeting = function () {},
//   retire = function () {},
//   startVacation = function () {}
// };

// План
// 1) созадть прототип человека в который запихнуть всю общую инфу 
// 2) прототип нового обьекта будет обьект выше, но в нем будут доступны метожы сотрудника 
// 3) прототип будет от 1го обьекта но у нынешнего сотрудника будут свои методы
// 4) прототип будет от 1го обьекта но у бывшего сотрудника будут свои методы
const Human = function(name='Serg',lastName,phoneNumber,location) {
    this.name  = name,
    this.lastName = lastName ,
    this.phoneNumber = phoneNumber, 
    this.location = location, 
    this.eat = function() {
      console.log('i am eating')
    }
    this.sleep = function() {
        console.log('i am sleeping')
    }
    this.callFriend = function(){
        console.log('i am on call with my friend')
    } 
}
const Emploee = function(position,baseSalary,salaryCurrency,department) {
   this.position = position,
   this.baseSalary = baseSalary,
   this.salaryCurrency = salaryCurrency,
   this.department = department,
   this.writeReport = function() {
        console.log('i am writing report')
    },
    this.organizeMeeting = function () {},
    this.retire = function () {},
    this.startVacation = function () {}
}

const CurrentEmploye  = function(startDate) {
    this.startDate = startDate
}

const PreviousEmployee  = function(endDate) {
    this.endDate = endDate
}

Emploee.prototype  = new Human()
CurrentEmploye.prototype  = new Emploee()
PreviousEmployee.prototype  = new Emploee()
const testEmpl  = new CurrentEmploye()
const names  = testEmpl.name
console.log(names)
    
