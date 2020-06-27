import { Component, OnInit } from '@angular/core';
import { PostPayload } from '../post-payload';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: PostPayload;
  PostId: Number;

  constructor(private router: ActivatedRoute, private postService: PostServiceService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.PostId = params['id'];
    });
    this.postService.getPost(this.PostId).subscribe((data:PostPayload) => {
      console.log(data.content)
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }
}
