import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;
  
  res: any;

  loading: boolean;
  logged: boolean;

  constructor(public router: Router, private loginService: LoginService) {
    this.logged = false;
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  onLoggedin(e) {
    this.loading = true;
    this.logged = false;
    e.preventDefault();
    this.email = e.target.email.value;
    this.password = e.target.password.value;
    this.loginService.getLogin(this.email, this.password).subscribe(
      (res: Response) => {
        this.res = res[0];
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('isToken', this.res.api_token);
        location.reload();
      },
      (error: Response) => {
        console.log(error);
        this.loading = false;
        this.logged = true;
      }
    );
  }

}
