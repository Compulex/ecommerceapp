import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loginStatus : boolean = false;

  setLoginStatus(value:any){
    this.loginStatus = value;
    
  }
}
