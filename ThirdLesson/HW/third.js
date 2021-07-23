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


function TicketWindow() {
    const events = [];
    const cash = []
    
    // создание уникального id "НИЧЕГО НЕ ВОЗВРАЩАЕТ"
    this.generateId = () => (new Date()).getTime();
    
    // создание ивента 
    this.createEvent = (eventName, eventPrice) => {
        // создал переменную в которую засунул цену и название концерта 
        const eventId = this.generateId();
        const eventData = { 
            eventName,
            eventPrice,
            eventId,
            soldTickets: [],
        };
        events.push(eventData);
        return eventData;        
    }

    this.buyTicket = eventName => {
        if(events.length){
           for(let i = 0; i < events.length; i++){
            if(events[i].eventName === eventName ){
                const ticketId = this.generateId();
                const ticketPrice = this.eventPrice;
                console.log(ticketId)
                events[i].soldTickets.push(ticketId);
                events[i].cash.push(ticketPrice)
                return ticketId;
            }
           }
        }
    }

    this.returnTicket = ticketId => {
        for(const e of events){
            for(const tid of e[soldTickets]) {
                if(ticketId===tid){
                    return 'already sold'
                    // cash.
                }
            }
        }
      
    }
    
}

const testWindow = new TicketWindow();
const testEvent = testWindow.createEvent('rave',900);
const testTicket = testWindow.buyTicket('rave');

console.log(testTicket,testEvent);