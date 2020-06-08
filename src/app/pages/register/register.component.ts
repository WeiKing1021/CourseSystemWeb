import { Component, OnInit } from '@angular/core';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { NotificationManager } from 'src/app/util/notification/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public studentId: string;
  public studentName: string;
  public classId: string;

  constructor(
    public studentManager: StudentManager,
    public not: NotificationManager,
  ) {}

  ngOnInit(): void {

    this.studentId = null;
    this.studentName = null;
    this.classId = null;
  }

  public register(): void {

    if (this.studentId == null) {

      this.not.send('「學號」不得為空!');

      return;
    }

    if (this.studentName == null) {

      this.not.send('「姓名」不得為空!');

      return;
    }

    if (this.classId == null) {

      this.not.send('「班級」不得為空!');

      return;
    }

    this.studentManager.register(this.studentId, this.studentName, this.classId, queryResult => {

      this.not.send(queryResult.resultMessage != null ? queryResult.resultMessage : '糟糕的錯誤...');
    });
  }

  public clear(): void {

    this.ngOnInit();
  }
}
