import { OrderedProduct } from "./orderedProduct";
import { User } from "./user";

export interface Product{
    id?: number,
    name?: string,
    description?: string,
    price?: number,
    user?: User
}