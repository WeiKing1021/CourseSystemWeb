import { Component, OnInit } from '@angular/core';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public uid: string;
  public password: string;

  public loading: boolean;
  public errorMessage: string;

  constructor(
    public studentManager: StudentManager,
  ) { }

  ngOnInit(): void {

    this.studentManager.onStudentLogin.pipe(
      tap(result => {

        this.loading = false;

        if (!result.ok) {

          this.showError('系統錯誤: ' + result.errorName + '(' + result.status + ')');

          return;
        }

        if (result.data == null) {

          this.showError('使用者帳號或密碼錯誤!');

          return;
        }

        this.cancel();
      })
    ).subscribe();
  }

  public login(): void {

    this.showError(null);

    if (!this.checkInput()) {

      return;
    }

    this.loading = true;

    this.studentManager.login(this.uid, this.password);
  }

  public cancel(): void {

    this.studentManager.showLogin = false;
    this.reset();
  }

  public checkInput(): boolean {

    if (this.uid == null) {

      this.showError('帳號不能為空');

      return;
    }

    if (this.password == null) {

      this.showError('密碼不能為空');

      return;
    }

    return true;
  }

  public showError(errorMessage: string): void {

    this.errorMessage = errorMessage;
  }

  public reset(): void {

    this.uid = null;
    this.password = null;
    this.loading = false;
    this.errorMessage = null;
  }
}
