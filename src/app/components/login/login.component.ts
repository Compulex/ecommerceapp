import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input()
  loggedIn = false;
  
  user : User = {
    username : "flast23",
    password : "password"
  };

  @Output()
  loginEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private eService : EcommerceService, public dialog: MatDialog){}

  login(){
    //this.loggedIn = true;
    
    this.eService.login(this.user).subscribe(user => {
      this.loggedIn = (user != null);
      //set global variable for user
      this.eService.setGUser(user);
      this.loginEvent.emit(this.loggedIn);
    });
  }

  openRegister(){
    this.dialog.open(RegisterComponent);
  }
}
