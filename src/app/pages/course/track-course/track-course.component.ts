import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/course/course.module';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { CourseManager } from 'src/app/util/course-manager/course-manager.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-track-course',
  templateUrl: './track-course.component.html',
  styleUrls: ['./track-course.component.css']
})
export class TrackCourseComponent implements OnInit {

  public courses: Course[];

  constructor(
    private studentManager: StudentManager,
    private courseManager: CourseManager,
  ) { }

  ngOnInit(): void {

    this.courseManager.getStudentTrackCourses(this.studentManager.getStudent(), queryResult => {

      this.courses = queryResult.data;
    });

    this.courseManager.onUserTrackCoursesUpdate.pipe(
      tap(result => {

        if (!result.ok) {

          return;
        }

        this.courses = result.data;
      })
    ).subscribe();
  }

}
