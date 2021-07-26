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
// 2) метод создания цены билета на вышеупомянутый концерт (может их как-то обьеденить???) ОБЪЕДИНИЛ
// 3) метод покупки билета с добавление его цены в кассу  
// 4) метод, который после покупки вернет тебе шестизначный id билета и пометить, что этот билет уже продан  ЕСТЬ
// 5) метод, который будет возвращать билет по вводу в него id билета, если он помечен кака продан, то из кассы вычитаем сумму 


function TicketWindow() {
    const events = [];
    // const cash = []
    
    // метод создания уникального id
    this.generateId = () => (new Date()).getTime();
    
    // метод создания ивента 
    this.createEvent = (eventName, eventPrice) => {
        const eventId = this.generateId();
        const eventData = { 
            eventName,
            eventPrice,
            eventId,
            soldTickets: [],
            eventCash: [],
        };
        events.push(eventData);
        return eventData;        
    }

// метод покупки билета         
    this.buyTicket = (eventName,eventPrice) => {
        if(events.length){
           for(let i = 0; i < events.length; i++){
            if(events[i].eventName === eventName ){
                const ticketId = this.generateId();
                const ticketPrice = eventPrice;
                // пушу цену в массив eventCash
                events[i].eventCash.push(ticketPrice)
                // тут стараюсь его перебрать и добавить цену, но бьет ошибкуф
                // let sum = 0;
                // for(let i = 0; i < eventCash.length; i++){
                //     sum += eventCash[i]
                // }
                events[i].soldTickets.push(ticketId);
                return ticketId;
            }
           }
        }
    }
    
// метод возврата билета
    this.returnTicket = (ticketId,eventPrice) => {
        for(const e of events){
            for(const tid of e[soldTickets]) {
                if(ticketId===tid){
                    // пытаюсь удалить первый найденый совпадающий по id елемент. 
                    events.splice[0,1]
                    // перебираю массив
                    for(i=0; eventCash.length; i++){}
                    // отнимаю от первого(и единственного) елемента цену ивента
                    let sum = eventCash[i] - eventPrice
                    return eventCash;
                }
            }
        }
    }
}

const testWindow = new TicketWindow();
const testEvent = testWindow.createEvent('rave',900);
const testTicket = testWindow.buyTicket('rave',900);
const testTicketReturn = testWindow.returnTicket(1627283998658);

console.log(testTicket,testEvent);
