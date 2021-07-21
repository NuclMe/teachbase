// Создать объект human со следующими возможностями:
// 1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
// 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года

// Все работает, кроме проверок, я их закоментил, а то они срабатывают по дефолту и ничего не проверяют
const human = {
    firstName: '',
    lastName: '',
    age: Number,
    
    get fullName(){
        return `${human.firstName} ${human.lastName}`
    },
    set fullName(value){
        // if(value != ''){
        //     console.log('value,should be a string')
        // }
        // if(value = ' '){
        //     console.log('value,shouldnt be empty')
        // }
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    },
    get birthDate(){
        return `${human.age}`
    },
    set birthDate(value){
        // if(value != Number){
        //     console.log('value,should be only number')
        // }
        this.age = value;
        const research = new Date().getFullYear() - this.age;
        this.age = research;   
    }
     
};
human.fullName = 'Serg Brin';
human.birthDate = 2001
console.log(human)