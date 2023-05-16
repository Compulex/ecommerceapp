import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent {
  user : User = {};
  products : Product[] = [];

  constructor(private eService : EcommerceService){}

  ngOnInit(): void{
    this.user = this.eService.getGUser();
    console.log("Current user: " + JSON.stringify(this.user));
    this.eService.getAllProducts().subscribe(products => this.products = products);
  }


  addToCart(product: Product){
    //adds product to list of products(cart)
    this.user.products?.push(product);
    //adds the price to the balance
    this.user.balance! += product.price!;

    console.log("Cart: " + JSON.stringify(this.user.products));

    this.eService.updateUser(this.user.id!!, this.user).subscribe(user => console.log("User updated: " + JSON.stringify(user)));
  }
}
