import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from '../post-payload';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  posts: Observable<Array<PostPayload>>;
  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

}
