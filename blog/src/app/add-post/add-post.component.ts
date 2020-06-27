import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';
import { PostPayload } from '../post-payload';
import { Router } from '@angular/router';
import { PostServiceService } from '../post-service.service';
import { UserPayload } from '../user-payload';
import { AuthServiceService } from '../auth/auth-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('', Validators.required)
  body = new FormControl('', Validators.required)
  success:String
  constructor(private addpostService: PostServiceService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = new PostPayload()

  }
 
  
  ngOnInit() {
  }
 
  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
      if(data.content==this.postPayload.content){
      console.log('success Response');
      this.router.navigateByUrl('/home');
      }else{
        this.success='duplicate post title : '+this.postPayload.title
      console.log(data);
    }})
  }

}
