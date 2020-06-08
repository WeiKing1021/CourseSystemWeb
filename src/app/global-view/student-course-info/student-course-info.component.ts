import { Component, OnInit } from '@angular/core';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { CourseManager } from 'src/app/util/course-manager/course-manager.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-student-course-info',
  templateUrl: './student-course-info.component.html',
  styleUrls: ['./student-course-info.component.css']
})
export class StudentCourseInfoComponent implements OnInit {

  public credits: number;

  constructor(
    public studentManager: StudentManager,
    public courseManager: CourseManager,
  ) {

    this.credits = 0;
  }

  ngOnInit(): void {

    this.studentManager.onStudentLogout.pipe(
      tap(() => {

        this.credits = 0;
      })
    ).subscribe();

    this.courseManager.onUserCoursesUpdate.pipe(
      tap(courses => {

        this.courseManager.getStudentCourseCredit(this.studentManager.getStudent(), queryResult => {

          if (queryResult.data != null) {

            this.credits = queryResult.data;
          }
        });
      })
    ).subscribe();
  }

}
