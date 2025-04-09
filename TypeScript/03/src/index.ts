// ✅ 4. Enum: Užsakymo būsena
// Tikslas: Sukurti enumą ir naudoti jį būsenų valdymui.
// Reikalavimai:
// Sukurk enum OrderStatus su reikšmėmis: Pending, Shipped, Delivered, Cancelled.
// Sukurk funkciją getNextStatus(current: OrderStatus): OrderStatus | null, kuri grąžina sekantį statusą. Pvz. iš Pending → Shipped, ir t.t.

enum OrderStatus {
    Pending = 'Pending',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled'
}

const getNextStatus = (current: OrderStatus): OrderStatus | null => {
    switch(current){
        case OrderStatus.Pending:
            return OrderStatus.Shipped;
        case OrderStatus.Shipped:
            return OrderStatus.Delivered;
        case OrderStatus.Delivered:
            return null;
        case OrderStatus.Cancelled:
            return null;
        default:
            return null;
    }
}

console.log(getNextStatus(OrderStatus.Delivered));
