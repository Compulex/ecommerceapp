import { Component } from '@angular/core';
import { EcommerceService } from './service/ecommerce-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceapp';

  constructor(private eService : EcommerceService){}
  logout(){
    //this.eService.setGUser(undefined);
  }
}
