import { Customer } from './customer';
import { Product } from './product';

export interface Order {
    orderId: number;
    customer: Customer;
    amount: number;
    total: number;
    product: Product;
    orderDate: Date;
    status: string;
}
