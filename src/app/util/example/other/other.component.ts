import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-other',
  template: '',
  styles: ['']
})
export class OtherComponent implements OnInit {

  constructor(private sv: LoginService) { }

  ngOnInit(): void {

    this.sv.whenLogin.pipe(
      tap(() => this.someActionWhenLogin())
    ).subscribe();

    this.sv.afterLogin.pipe(
      tap(() => {
        console.log('檢測到登入');
        this.someStatusSwitchIfLogin();
      })
    ).subscribe();
  }

  someActionWhenLogin() {
    // 播放一些登入成功的動畫
  }

  someStatusSwitchIfLogin() {
    // 修改某些東西的狀態或顯示
  }

}
