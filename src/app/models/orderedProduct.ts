import { Order } from "./order";
import { Product } from "./product";

export interface OrderedProduct{
    id?: number,
    quantity?: number,
    order?: Order,
    product?: Product
}