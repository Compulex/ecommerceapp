import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm : FormGroup = new FormGroup({});

  user : User = {
    firstName : "first",
    lastName : "last",
    phoneNumber : "718-284-4567",
    email : "flast23@aol.com",
    username : "flast23",
    password : "password"
  }
  success = false;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private eService : EcommerceService){
    this.createForm();
  }

  createForm(){
    this.registerForm = new FormGroup({
      "firstName": new FormControl(this.user.firstName, []),
      "lastName": new FormControl(this.user.lastName, []),
      "phoneNumber": new FormControl(this.user.phoneNumber, []),
      "email": new FormControl(this.user.email, [Validators.email]),
      "username": new FormControl(this.user.username, [Validators.required]),
      "password": new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  register(){
    this.eService.register(this.user).subscribe(user => {
      this.success = user != null;
      console.log(user)
    });
  }

}
