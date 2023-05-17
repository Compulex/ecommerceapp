import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
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
