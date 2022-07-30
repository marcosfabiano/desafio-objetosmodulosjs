import Order from '../models/order.js';
import * as shipmentService from './shipping-service.js';

export function total(order) {

    const shipping = shipmentService.shipment(order);

    return order.basic - (order.basic * order.discount / 100) + shipping;
}
