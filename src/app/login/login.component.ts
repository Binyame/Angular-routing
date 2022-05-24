import { Component, OnInit, HostBinding } from '@angular/core';  //***
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message!: string;
  username!: string;
  @HostBinding('attr.class') cssClass = 'alert'; //***

  constructor(public authService: AuthService) {
    this.message = '';
  }

  ngOnInit(): void { }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect login credentials entered. Please enter the correct login credentials.';
    }
    setTimeout(() => {
      this.message = '';
    }, 4500);
    return false;
  }

}
