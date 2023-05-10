import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent {
  products : Product[] = [];

  constructor(private eService : EcommerceService){}

  ngOnInit(): void{
    this.eService.getAllProducts().subscribe(products => this.products = products);
  }
}
