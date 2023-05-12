import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user : User = {
    firstName : "first",
    lastName : "last",
    email : "flast23@aol.com",
    username : "flast23",
    password : "password"
  }
  success = false;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private eService : EcommerceService){}

  register(){
    this.eService.register(this.user).subscribe(user => {
      this.success = user != null;
      console.log(user)
      this.dialogRef.close();
    });
  }

}
