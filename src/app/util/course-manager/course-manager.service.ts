import { Injectable } from '@angular/core';
import { HttpQuery } from '../http-query/http-query.service';
import { StudentAccount } from 'src/app/class/student-account/student-account.module';
import { QueryResult } from '../http-query/query-result.module';
import { Course } from 'src/app/class/course/course.module';
import { HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { StudentManager } from '../student-manager/student-manager.service';
import { ActionResult } from '../http-query/action-result.module';

@Injectable({
  providedIn: 'root'
})
export class CourseManager {

  constructor(
    private studentManager: StudentManager,
    private http: HttpQuery,
  ) {}

  private userCoursesSubject: Subject<QueryResult<Course[]>> = new Subject();

  private userTrackCoursesSubject: Subject<QueryResult<Course[]>> = new Subject();

  public get onUserCoursesUpdate(): Subject<QueryResult<Course[]>> {

    return this.userCoursesSubject;
  }

  public get onUserTrackCoursesUpdate(): Subject<QueryResult<Course[]>> {

    return this.userTrackCoursesSubject;
  }

  public updateUserCourses(): void {

    const student = this.studentManager.getStudent();

    if (student == null) {

      return;
    }

    this.getStudentCourses(student, queryResult => {

      if (queryResult == null) {

        return;
      }

      this.userCoursesSubject.next(queryResult);
    });
  }

  public updateUserTrackCourses(): void {

    const student = this.studentManager.getStudent();

    if (student == null) {

      return;
    }

    this.getStudentTrackCourses(student, queryResult => {

      if (queryResult == null) {

        return;
      }

      this.userTrackCoursesSubject.next(queryResult);
    });
  }

  public enrollCourse(studentAccount: StudentAccount, course: Course, getResult: (queryResult: QueryResult<ActionResult>) => any) {

    if (studentAccount == null || course == null) {

      return;
    }

    const params = new HttpParams()
      .set('student_id', studentAccount.uid)
      .set('course_id', course.id.toString());

    this.http.get<ActionResult>('/enrollCourse', params, getResult);
  }

  public dropCourse(studentAccount: StudentAccount, course: Course, getResult: (queryResult: QueryResult<ActionResult>) => any) {

    if (studentAccount == null || course == null) {

      return;
    }

    const params = new HttpParams()
      .set('student_id', studentAccount.uid)
      .set('course_id', course.id.toString());

    this.http.get<ActionResult>('/dropCourse', params, getResult);
  }


  public trackCourse(studentAccount: StudentAccount, course: Course, getResult: (queryResult: QueryResult<ActionResult>) => any) {

    if (studentAccount == null || course == null) {

      return;
    }

    const params = new HttpParams()
      .set('student_id', studentAccount.uid)
      .set('course_id', course.id.toString());

    this.http.get<ActionResult>('/trackCourse', params, getResult);
  }

  public untrackCourse(studentAccount: StudentAccount, course: Course, getResult: (queryResult: QueryResult<ActionResult>) => any) {

    if (studentAccount == null || course == null) {

      return;
    }

    const params = new HttpParams()
      .set('student_id', studentAccount.uid)
      .set('course_id', course.id.toString());

    this.http.get<ActionResult>('/untrackCourse', params, getResult);
  }

  public getStudentCourseCredit(studentAccount: StudentAccount, getResult: (queryResult: QueryResult<number>) => void): void {

    if (studentAccount == null) {

      return;
    }

    const params = new HttpParams()
      .set('student_id', studentAccount.uid);

    this.http.get<number>('/getStudentCurrentCredit', params, getResult);
  }

  public getStudentCourses(studentAccount: StudentAccount, getResult: (queryResult: QueryResult<Course[]>) => void): void {

    if (studentAccount == null) {

      return;
    }

    const params = new HttpParams()
      .set('student_id', studentAccount.uid);

    this.http.get<Course[]>('/getStudentCourses', params, getResult);
  }

  public getStudentTrackCourses(studentAccount: StudentAccount, getResult: (queryResult: QueryResult<Course[]>) => void): void {

    if (studentAccount == null) {

      return;
    }

    const params = new HttpParams()
      .set('student_id', studentAccount.uid);

    this.http.get<Course[]>('/getStudentTrackCourses', params, getResult);
  }

  public getCourse(courseId: number, getResult: (queryResult: QueryResult<Course>) => void): void {

    const params = new HttpParams()
      .set('id', courseId.toString());

    this.http.get<Course>('/getCourseById', params, getResult);
  }

  public getAllCourses(getResult: (queryResult: QueryResult<Course[]>) => void): void {

    const params = new HttpParams();

    this.http.get<Course[]>('/getAllCourses', params, getResult);
  }
}
