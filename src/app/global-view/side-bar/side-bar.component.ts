import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StudentManager } from 'src/app/util/student-manager/student-manager.service';
import { Course } from 'src/app/class/course/course.module';
import { CourseManager } from 'src/app/util/course-manager/course-manager.service';
import { StudentAccount } from 'src/app/class/student-account/student-account.module';
import { QueryResult } from 'src/app/util/http-query/query-result.module';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public studentAccount: StudentAccount;
  public studentCouses: Course[];

  constructor(
    public studentManager: StudentManager,
    public courseManager: CourseManager,
  ) {}

  ngOnInit(): void {}
}
