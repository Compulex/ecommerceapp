import { Component } from '@angular/core';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loginStatus : boolean = false;

  constructor(private eService : EcommerceService){}

  /*ngOnInit(){
    this.loginStatus = this.eService.getGUser() !== {};
  }*/

  setLoginStatus(value:any){
    this.loginStatus = value;
    
  }
}
