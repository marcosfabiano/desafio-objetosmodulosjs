export function shipment(order) {

    let shipping = 0;
    
    if (order.basic < 100.00) {
        shipping = 20.00;
    }
    else if (order.basic < 200.00) {
        shipping = 12.00;
    };

    return shipping;
}
