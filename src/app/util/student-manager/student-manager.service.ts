import { Injectable } from '@angular/core';
import { StudentAccount } from 'src/app/class/student-account/student-account.module';
import { Setting } from 'src/app/setting/setting.module';
import { HttpQuery } from '../http-query/http-query.service';
import { HttpParams } from '@angular/common/http';
import { QueryResult } from '../http-query/query-result.module';

import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActionResult } from '../http-query/action-result.module';

@Injectable({
  providedIn: 'root'
})

export class StudentManager {

  public student: StudentAccount = null;

  public showLogin: boolean;

  private loginSubject: Subject<QueryResult<StudentAccount>> = new Subject();

  private logoutSubject: Subject<void> = new Subject();

  constructor(
    public setting: Setting,
    public http: HttpQuery,
    private router: Router,
  ) {

    /*this.student = new StudentAccount();
    this.student.uid = 'D0872781';
    this.student.name = '魏巍';
    this.student.classId = 'IE2D';*/
  }

  public get onStudentLogin(): Observable<QueryResult<StudentAccount>> {

    return this.loginSubject;
  }

  public get onStudentLogout(): Observable<void> {

    return this.logoutSubject;
  }

  public getStudent(): StudentAccount {

    return this.student;
  }

  public hasLogin(): boolean {

    return this.getStudent() != null;
  }

  public login(uid: string, password: string): void {

    const params = new HttpParams()
      .set('student_id', uid)
      .set('password', password);

    this.http.get<StudentAccount>('/getStudentAccount', params, queryResult => {

      if (queryResult == null) {

        return;
      }

      this.student = queryResult.data;

      this.loginSubject.next(queryResult);

      this.router.navigateByUrl('/');
    });
  }

  public register(studentId: string, studentName: string, classId: string, result: (actionResult: ActionResult) => void): void {

    const params = new HttpParams()
      .set('student_id', studentId)
      .set('student_name', studentName)
      .set('class_id', classId);

    this.http.get<ActionResult>('registerStudentAccount', params, queryResult => {

      if (queryResult == null) {

        return;
      }

      result(queryResult.data);
    });
  }

  public logout(): void {

    this.student = null;

    this.logoutSubject.next();

    this.router.navigateByUrl('/');
  }

  public callLoginPage(): void {

    if (this.hasLogin()) {

      return;
    }

    this.showLogin = true;
  }
}
