import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  user : User = {};
  cart : Product[] = [];


  constructor(private eService : EcommerceService){}

  ngOnInit() : void{
    this.user = this.eService.getGUser();
    this.eService.getUserCart(this.user.id!).subscribe(cart => this.cart = cart);
  }

  removeFromCart(product : Product){
    //removes product from list of products(cart)
    let idx = this.user.products!.indexOf(product);
    let idxx = this.cart.indexOf(product);
    
    this.user.products!.splice(idx, 1);
    this.cart.splice(idxx, 1);

    //deducts the price from the balance
    this.user.balance! -= product.price!;

    console.log("Cart: " + JSON.stringify(this.user.products));

    this.eService.updateUser(this.user.id!, this.user).subscribe(user => console.log("User updated: " + JSON.stringify(user)));
  }
}
