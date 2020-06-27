import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
 
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload;
  success:String
  confirm:string
  constructor( private authService: AuthServiceService, private router:Router) {
    this.registerForm = new FormGroup({
      username:  new FormControl('', Validators.required),
      email:  new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password:  new FormControl('', Validators.required),
      confirmPassword:  new FormControl('', Validators.required)
    });
    this.registerPayload = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
get f(){
  return this.registerForm.controls;
}
  ngOnInit() {
  }

  onSubmit() {
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
    if(this.registerPayload.confirmPassword!=this.registerPayload.password){
      console.log(this.registerPayload.confirmPassword);
      console.log(this.registerPayload.password);
          this.confirm='not the same password'
    }
   else{
    this.authService.register(this.registerPayload).subscribe(data => {
      if (data.username!='dublicate') {
        console.log('register succcess');
        this.router.navigateByUrl('/login');
      } else {
        console.log('register failed');
        this.success='the same mail are registered'
      }
    });}
  }

}
