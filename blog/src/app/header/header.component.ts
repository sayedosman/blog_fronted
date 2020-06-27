import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthServiceService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
