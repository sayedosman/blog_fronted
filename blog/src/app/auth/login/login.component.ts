import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginPaload } from '../login-payload';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPaload;
  success:String
  constructor(public service: AuthServiceService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
  }
 get f(){
   return this.loginForm.controls;
 }
  ngOnInit(): void {
  
  }
 
  onSubmit() {
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    this.service.login(this.loginPayload).subscribe(data => {
      if (data!=null) {
        localStorage.setItem('authenticationToken',data.authenticationToken)
        localStorage.setItem('username',data.username)
        console.log(data.authenticationToken)
        console.log(data.username)
        this.router.navigateByUrl('/home');
      } else {
        this.success='username and password not vailed'
        console.log('Login failed');
      }
    });
  }
}
