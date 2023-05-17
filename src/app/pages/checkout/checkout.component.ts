import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/models/order';
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
  date : Date = new Date();
  total : number = 0.0;

  constructor(private eService : EcommerceService, private snackbar : MatSnackBar){}

  ngOnInit() : void{
    this.user = this.eService.getGUser();
    this.total = this.user.balance!;

    this.eService.getUserCart(this.user.id!).subscribe((cart : Product[]) => {
      cart.forEach((prod) => {
        this.total += prod.price!;
      });
      this.cart = cart;
    });
  }

  /*fromProductToOP(order : Order){
    let orderedProduct : OrderedProduct = { quantity: 1 };

    this.cart.forEach((prod) => {
      this.eService.addOrderedProduct(prod.id!, order.id!, orderedProduct).subscribe(op => console.log(JSON.stringify(op)));
    })
  }*/

  placeOrder(){
    let order : Order = {
      date : this.date,
      orderTotal : this.total,
      user : this.user
    };

    if(this.user.id != undefined){
      //console.log(JSON.stringify(order));
      this.eService.addOrder(this.user.id, order).subscribe();
      
    }
    //order added
    this.snackbar.open("Order has been Place", "", {
      duration: 2000
    });

    //clear out cart
    this.cart = [];
  }
}
