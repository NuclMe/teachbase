// Система продажи билетов 

// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */

// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */


// План
// 0) Генератор случайного шестизначного id  ЕСТЬ
// 1) метод создания концерта ЕСТЬ 
// 2) метод создания цены билета на вышеупомянутый концерт (может их как-то обьеденить???) ОБЬЕДЕНИЛ
// 3) метод покупки билета с добавление его цены в кассу 
// 4) метод, который после покупки вернет тебе шестизначный id билета и пометить, что этот билет уже продан  
// 5) метод, который будет возвращать билет по вводу в него id билета, если он помечен кака продан, то из кассы вычитаем сумму 


const ticketWindow = function(eventName,eventPrice){
    this.eventName = eventName;
    this.eventPrice = eventPrice;
    let events = [];
    
    // создание уникального id "НИЧЕГО НЕ ВОЗВРАЩАЕТ"
    this.generateId = (min=0, max=999999) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        Math.floor(Math.random() * (max - min)) + min
       
    }

    // создание ивента 
    this.createEvent = () => {
        // создал переменную в которую засунул цену и название концерта 
        const eventData =  `${this.eventName}  ${this.eventPrice}`;
        events.push(eventData)
        // запушил это все в массив

        // const concertPrice = ;
        console.log(events)
        // const res = events.map((el) => el + уникальный id  )
        
    }
    this.buyTicket = () => {


    }
    
}


const ololo = new ticketWindow('Classical Concert', 150)    
const rave = new ticketWindow('Rave', 1500)    
ololo.createEvent()
ololo.generateId()
rave.createEvent()
// console.log(ololo)