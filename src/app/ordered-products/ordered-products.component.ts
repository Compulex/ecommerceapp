import { Component, Input } from '@angular/core';
import { OrderedProduct } from '../models/orderedProduct';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { EcommerceService } from '../service/ecommerce-service.service';

@Component({
  selector: 'app-ordered-products',
  templateUrl: './ordered-products.component.html',
  styleUrls: ['./ordered-products.component.css']
})
export class OrderedProductsComponent {
  @Input()
  product : Product = {};

  @Input()
  order : Order = {};
  
  orderedProduct : OrderedProduct = {};

  constructor(private eService : EcommerceService){}
  ngOnInit(){

    this.orderedProduct = {
      quantity : 1,
      product : this.product,
      order : this.order
    }
    this.eService.addOrderedProduct(this.product.id!, this.order.id!, this.orderedProduct).subscribe(op => console.log(op));
  }
}
