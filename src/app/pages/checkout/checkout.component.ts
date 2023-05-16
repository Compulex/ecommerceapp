import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderedProduct } from 'src/app/models/orderedProduct';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  user : User = {};
  cart : Product[] = [];
  order : Order = {};
  orderedProduct : OrderedProduct = {};

  quantity : number = 1;
  date : Date = new Date();
  total : number = 0.0;

  constructor(private eService : EcommerceService){}

  ngOnInit() : void{
    this.user = this.eService.getGUser();
    this.total = this.user.balance!;

    this.eService.getUserCart(this.user.id!).subscribe(cart => {
      this.cart = cart
      this.cart.forEach((prod) => {
        this.total += prod.price!;
      })
    });
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

  placeOrder(){
    let order : Order = {
      date : this.date,
      orderTotal : this.total,
      user : this.user
    };

    //console.log(JSON.stringify(order))

    //order added
    this.eService.addOrder(this.user.id!, order).subscribe(order => console.log(JSON.stringify(order)));
  }
}
