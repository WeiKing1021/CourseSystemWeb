import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/class/course/course.module';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { CourseManager } from 'src/app/util/course-manager/course-manager.service';
import { NotificationManager } from 'src/app/util/notification/notification.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  @Input() course: Course;

  @Input() showEnroll: boolean;
  @Input() showDrop: boolean;
  @Input() showTrack: boolean;
  @Input() showUntrack: boolean;

  private weekName = ['日', '一', '二', '三', '四', '五', '六'];

  private defaultError = '無法與伺服器取得連線!';

  constructor(
    private studentManager: StudentManager,
    private courseManager: CourseManager,
    private notificationManager: NotificationManager,
  ) {}

  ngOnInit(): void {}

  public flushCourseInfo(): void {

    if (this.course == null) {

      return;
    }

    this.courseManager.getCourse(this.course.id, queryResult => {

      if (queryResult == null || queryResult.data == null) {

        return;
      }

      this.course = queryResult.data;
    });
  }

  public enroll(): void {

    const studentAccount = this.studentManager.getStudent();

    this.courseManager.enrollCourse(studentAccount, this.course, queryResult => {

      if (queryResult == null || queryResult.data == null) {

        this.notificationManager.send(this.defaultError);

        return;
      }

      const actionResult = queryResult.data;

      this.notificationManager.send(actionResult.resultMessage);

      if (actionResult.ok) {

        this.courseManager.updateUserCourses();

        this.flushCourseInfo();
      }
    });
  }

  public drop(): void {

    const studentAccount = this.studentManager.getStudent();

    // tslint:disable-next-line: triple-equals
    if (this.course.required == true && !confirm('必修ㄛ, 確定要退選嗎^V^？')) {

      return;
    }

    this.courseManager.dropCourse(studentAccount, this.course, queryResult => {

      if (queryResult == null || queryResult.data == null) {

        this.notificationManager.send(this.defaultError);

        return;
      }

      const actionResult = queryResult.data;

      this.notificationManager.send(actionResult.resultMessage);

      if (actionResult.ok) {

        this.courseManager.updateUserCourses();

        this.flushCourseInfo();
      }
    });
  }

  public track(): void {

    const studentAccount = this.studentManager.getStudent();

    this.courseManager.trackCourse(studentAccount, this.course, queryResult => {

      if (queryResult == null || queryResult.data == null) {

        this.notificationManager.send(this.defaultError);

        return;
      }

      const actionResult = queryResult.data;

      this.notificationManager.send(actionResult.resultMessage);

      if (actionResult.ok) {

        this.courseManager.updateUserCourses();
      }
    });
  }

  public untrack(): void {

    const studentAccount = this.studentManager.getStudent();

    this.courseManager.untrackCourse(studentAccount, this.course, queryResult => {

      if (queryResult == null || queryResult.data == null) {

        this.notificationManager.send(this.defaultError);

        return;
      }

      const actionResult = queryResult.data;

      this.notificationManager.send(actionResult.resultMessage);

      if (actionResult.ok) {

        this.courseManager.updateUserTrackCourses();
      }
    });
  }

  public getWeekText(week: number): string {

    return '星期' + this.weekName[week];
  }

  public getSessionText(session: number): string {

    return '第' + session + '節';
  }

  public getGivenClassText(): string {

    return this.course.classId.join(', ');
  }
}
