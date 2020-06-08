import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-login',
  template: '',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private sv: LoginService) { }

  ngOnInit(): void {
  }

  login(user: string, pass: string) {
    this.sv.login(user, pass);
  }
}
