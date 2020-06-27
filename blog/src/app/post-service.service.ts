import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostPayload } from './post-payload';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
   
  constructor(private httpClient: HttpClient) {
  }
  addPost(postPayload: PostPayload):Observable<PostPayload>{
    const headers = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('authenticationToken'));

    return this.httpClient.post<PostPayload>('http://localhost:8080/api/posts/add',postPayload,{headers});
  }

  getAllPosts(): Observable<Array<PostPayload>>{
    const headers = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('authenticationToken'));

    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all",{headers});
      
  }

  getPost(permaLink: Number):Observable<PostPayload>{
    const headers = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('authenticationToken'));

    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink,{headers});
  }
 
}
