import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(private http: HttpClient) { }

  getHeader() : HttpHeaders{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return header;
  }

  /* ********************* User endpoints *************************/


  register(user : User) : Observable<User>{
    return this.http.post<User>("http://127.0.0.1:9000/register", user, {headers:this.getHeader()});
  }

  login(user : User) : Observable<User>{
    return this.http.post<User>("http://127.0.0.1:9000/login", user, {headers:this.getHeader()});
  }

  getUserById(id : number) : Observable<User>{
    return this.http.get<User>(`http://127.0.0.1:9000/user/${id}`, {headers:this.getHeader()});
  }

  getUserCart(id : number) : Observable<Product[]>{
    return this.http.get<Product[]>(`http://127.0.0.1:9000/user/${id}/products`, {headers:this.getHeader()});
  }

  updateUser(id : number, user : User) : Observable<User>{
    return this.http.put<User>(`http://127.0.0.1:9000/user/${id}`, user, {headers:this.getHeader()});
  }

  deleteUser(id : number){
    this.http.delete(`http://127.0.0.1:9000/user/${id}`, {headers:this.getHeader()});
  }

  /*checkout(id : number) : Observable<User>{
    return this.http.patch(`http://127.0.0.1:9000/user/${id}`, {headers:this.getHeader()});
  }*/


      /* ********************* Product endpoints *************************/
  
  addProduct(product : Product) : Observable<Product>{
    return this.http.post<Product>("http://127.0.0.1:9000/product", product, {headers:this.getHeader()});
  }

  getProductById(id : number) : Observable<Product>{
    return this.http.get<Product>(`http://127.0.0.1:9000/product/${id}`, {headers:this.getHeader()});
  }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>("http://127.0.0.1:9000/products", {headers:this.getHeader()});
  }

  updateProduct(id : number, product : Product) : Observable<Product>{
    return this.http.put<Product>(`http://127.0.0.1:9000/product/${id}`, product, {headers:this.getHeader()});
  }

  deleteProduct(id : number){
    this.http.delete(`http://127.0.0.1:9000/product/${id}`, {headers:this.getHeader()});
  }
}
