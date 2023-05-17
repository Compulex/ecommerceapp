import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { OrderedProduct } from '../models/orderedProduct';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  globalUser: User = {};

  constructor(private http: HttpClient) {}

  getHeader() : HttpHeaders{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return header;
  }

  setGUser(val: User){
    this.globalUser = val;
  }

  getGUser() : User{
    return this.globalUser;
  }

  /* ********************* User endpoints *************************/


  register(user : User) : Observable<User>{
    return this.http.post<User>("http://localhost:9000/register", user, {headers:this.getHeader()});
  }

  login(user : User) : Observable<User>{
    return this.http.post<User>("http://localhost:9000/login", user, {headers:this.getHeader()}).pipe(
      tap({
        next: (response) => {
          this.globalUser = response;
        }
      })
    );
  }

  getUserById(id : number) : Observable<User>{
    return this.http.get<User>(`http://localhost:9000/user/${id}`, {headers:this.getHeader()});
  }

  getUserCart(id : number) : Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:9000/user/${id}/products`, {headers:this.getHeader()});
  }

  updateUser(id : number, user : User) : Observable<User>{
    return this.http.put<User>(`http://localhost:9000/user/${id}`, user, {headers:this.getHeader()});
  }

  deleteUser(id : number){
    this.http.delete(`http://localhost:9000/user/${id}`, {headers:this.getHeader()});
  }


      /* ********************* Product endpoints *************************/

  addProduct(product : Product) : Observable<Product>{
    return this.http.post<Product>("http://localhost:9000/product", product, {headers:this.getHeader()});
  }

  getProductById(id : number) : Observable<Product>{
    return this.http.get<Product>(`http://localhost:9000/product/${id}`, {headers:this.getHeader()});
  }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9000/products", {headers:this.getHeader()});
  }

  updateProduct(id : number, product : Product) : Observable<Product>{
    return this.http.put<Product>(`http://localhost:9000/product/${id}`, product, {headers:this.getHeader()});
  }

  deleteProduct(id : number){
    this.http.delete(`http://localhost:9000/product/${id}`, {headers:this.getHeader()});
  }


  /* ********************* Order endpoints *************************/

  addOrder(uid : number, order : Order) : Observable<Order>{
    return this.http.post<Order>(`http://localhost:9000/user/${uid}/checkout`, order, {headers:this.getHeader()});
  }

  getOrderById(id : number) : Observable<Order>{
    return this.http.get<Order>(`http://localhost:9000/order/${id}`, {headers:this.getHeader()});
  }

  getOrdersByUserId(uid : number) : Observable<Order[]>{
    return this.http.get<Order[]>(`http://localhost:9000/user/${uid}/orders`, {headers:this.getHeader()});
  }

  updateOrder(id : number, order : Order) : Observable<Order>{
    return this.http.put<Order>(`http://localhost:9000/order/${id}`, order, {headers:this.getHeader()});
  }

  deleteOrder(id : number) : void{
    this.http.delete(`http://localhost:9000/order/${id}`, {headers:this.getHeader()});
  }


  /* ********************* Ordered_Product endpoints *************************/

  addOrderedProduct(pid : number, oid : number, orderedProduct : OrderedProduct) : Observable<OrderedProduct>{
    return this.http.post<OrderedProduct>(`http://localhost:9000/product/${pid}/order/${oid}/orderedProduct`, orderedProduct, {headers:this.getHeader()});
  }

  getOPByOrder(oid : number) : Observable<OrderedProduct[]>{
    return this.http.get<OrderedProduct[]>(`http://localhost:9000/order/${oid}/orderedProducts`, {headers:this.getHeader()});
  }

  deleteOrderedProduct(id : number) : void{
    this.http.delete(`http://localhost:9000/orderedProduct/${id}`, {headers:this.getHeader()})
  }
}
