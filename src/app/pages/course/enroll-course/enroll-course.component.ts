import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/class/course/course.module';
import { CourseManager } from 'src/app/util/course-manager/course-manager.service';
import { NotificationManager } from 'src/app/util/notification/notification.service';

@Component({
  selector: 'app-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent implements OnInit {

  public courseId: number;
  public course: Course;

  constructor(
    private courseManager: CourseManager,
    private notification: NotificationManager,
  ) {}

  ngOnInit(): void {
  }

  public search(): void {

    if (this.courseId == null || isNaN(this.courseId) || this.courseId * 1 === 0) {

      this.notification.send('課堂代碼格式錯誤!');

      return;
    }

    this.courseManager.getCourse(this.courseId, result => {

      if (!result.ok) {

        this.notification.send('連線錯誤: ' + result.errorName + '(' + result.status + ')');

        return;
      }

      this.course = result.data;
    });
  }

  public clear(): void {

    this.courseId = null;
    this.course = null;
  }
}
