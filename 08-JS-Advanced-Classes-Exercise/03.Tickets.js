function ticketsDate(ticketsInfoArr, sortCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return ticketsInfoArr.map((ticketIfo, ind) => {
        const [destination, price, status] = ticketIfo.split('|');
        return { ticket: new Ticket(destination, price, status), ind };
    })
        .sort((a, b) => {
            const left = a.ticket[sortCriterion];
            const right = b.ticket[sortCriterion];

            const sorted = typeof left === 'number' ? left - right : left.localeCompare(right);
            return sorted || a.ind - b.ind;
        })
        .map((el) => el.ticket);
}
console.log(ticketsDate(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));
console.log(ticketsDate(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));