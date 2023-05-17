import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { EcommerceService } from 'src/app/service/ecommerce-service.service';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let eService: EcommerceService;

  const mockMatDialogRef = jasmine.createSpyObj(['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      declarations: [ RegisterComponent ],
      providers: [
        EcommerceService,
        HttpClientModule,
        {provide: MatDialogRef, useValue: mockMatDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*firstName : "first",
    lastName : "last",
    phoneNumber : "718-284-4567",
    email : "flast23@aol.com",
    username : "flast23",
    password */
  it('form should be invalid', waitForAsync(() => {
    component.registerForm.controls['username'].setValue('');
    component.registerForm.controls['password'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  }));

  it('form should be valid', waitForAsync(() => {
    component.registerForm.controls['username'].setValue('user');
    component.registerForm.controls['password'].setValue('password');
    expect(component.registerForm.valid).toBeTruthy();
  }));
});
