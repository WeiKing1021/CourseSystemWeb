import { Component, OnInit } from '@angular/core';
import { CourseManager } from 'src/app/util/course-manager/course-manager.service';
import { Course } from 'src/app/class/course/course.module';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-drop-course',
  templateUrl: './drop-course.component.html',
  styleUrls: ['./drop-course.component.css']
})
export class DropCourseComponent implements OnInit {

  public courses: Course[];

  constructor(
    private studentManager: StudentManager,
    private courseManager: CourseManager,
  ) { }

  ngOnInit(): void {

    this.courseManager.getStudentCourses(this.studentManager.getStudent(), queryResult => {

      this.courses = queryResult.data;
    });

    this.courseManager.onUserCoursesUpdate.pipe(
      tap(result => {

        if (!result.ok) {

          return;
        }

        this.courses = result.data;
      })
    ).subscribe();
  }

}
