import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/course/course.module';
import { CourseManager } from 'src/app/util/course-manager/course-manager.service';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit {

  public courses: Course[];

  constructor(
    public courseManager: CourseManager,
  ) {}

  ngOnInit(): void {

    this.courseManager.getAllCourses(queryResult => {

      this.courses = queryResult.data;
    });
  }

}
