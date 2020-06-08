import { Component } from '@angular/core';
import { Setting } from './setting/setting.module';
import { HttpQuery } from './util/http-query/http-query.service';
import { NotificationManager } from './util/notification/notification.service';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(

    public setting: Setting,
    public http: HttpQuery,
    public not: NotificationManager,
    public studentManager: StudentManager,
  ) {}
}
