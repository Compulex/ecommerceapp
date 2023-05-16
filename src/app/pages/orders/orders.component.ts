import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderedProduct } from 'src/app/models/orderedProduct';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  user : User = {};
  orders : Order[] = [];
  products : Product[] = [];

  constructor(private eService : EcommerceService){}
  
  ngOnInit() : void{
    this.user = this.eService.getGUser();
    this.eService.getOPByOrder(this.user.orders![0].id!).subscribe(ops => console.log(JSON.stringify(ops)));

    /*this.eService.getOrdersByUserId(this.user.id!).subscribe((orders : Order[]) => {
      this.orders = orders;
      //get list of products to show for each order
      this.orders.forEach((order) => {
        console.log(JSON.stringify(order));
        /*order.orderedProducts!.forEach((op) => {
          this.products.push(op.product!);
        });
      });
    });*/
  }

}
