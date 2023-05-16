import { Order } from "./order";
import { Product } from "./product";

export interface User{
    id?: number,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    email?: string,
    username?: string,
    password?: string,
    balance?: number,
    products?: Product[],
    orders?: Order[]
}