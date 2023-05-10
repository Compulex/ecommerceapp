import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input()
  loggedIn = true;
  
  user : User = {
    username : "",
    password : ""
  };

  constructor(private eService : EcommerceService){}

  login(){

    this.eService.login(this.user).subscribe(user => this.loggedIn = (user != null));
  }
}
