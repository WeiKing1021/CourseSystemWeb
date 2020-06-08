import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { StudentAccount } from 'src/app/class/student-account/student-account.module';
import { HttpQuery } from 'src/app/util/http-query/http-query.service';
import { CourseManager } from 'src/app/util/course-manager/course-manager.service';
import * as $ from 'jquery';
import { Course } from 'src/app/class/course/course.module';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-school-time-table',
  templateUrl: './school-time-table.component.html',
  styleUrls: ['./school-time-table.component.css']
})
export class SchoolTimeTableComponent implements OnInit {

  public courses: Course[][];

  constructor(
    public studentManager: StudentManager,
    public courseManager: CourseManager,
  ) {}

  ngOnInit(): void {

    this.resetCourses();

    this.studentManager.onStudentLogin.pipe(
      tap(result => {

        if (result.data == null) {

          return;
        }

        this.resetCourses();

        this.courseManager.updateUserCourses();
      })
    ).subscribe();

    this.studentManager.onStudentLogout.pipe(
      tap(() => {

        this.resetCourses();
      })
    ).subscribe();

    this.courseManager.onUserCoursesUpdate.pipe(
      tap(result => {

        if (result.data == null) {

          return;
        }

        this.resetCourses();

        for (const course of result.data) {
          for (const time of course.time) {

            this.courses[time.session][time.week] = course;
          }
        }

      })
    ).subscribe();
  }

  public getCourse(week: number, session: number): Course {

    if (this.courses == null) {

      return null;
    }

    return this.courses[session][week];
  }

  public resetCourses(): void {

    this.courses = new Array<Array<Course>>();
    for (let raw = 0; raw < 14; raw++) {

      this.courses.push([]);

      for (let col = 0; col < 7; col++) {

        this.courses[raw][col] = null;
      }
    }
  }
}
