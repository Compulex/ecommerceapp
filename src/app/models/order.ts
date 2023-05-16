import { OrderedProduct } from "./orderedProduct";
import { User } from "./user";

export interface Order{
    id?: number,
    date?: Date,
    orderTotal?: number,
    user?: User,
    orderedProducts?: OrderedProduct[]
}