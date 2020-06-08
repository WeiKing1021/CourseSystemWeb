import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms'; // <-- 加上FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './global-view/navbar/navbar.component';
import { StudentManager } from './util/student-manager/student-manager.service';
import { Setting } from './setting/setting.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationManager } from './util/notification/notification.service';
import { NotificationComponent } from './global-view/notification/notification.component';
import { IndexBarComponent } from './global-view/index-bar/index-bar.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './global-view/login/login.component';
import { SideBarComponent } from './global-view/side-bar/side-bar.component';
import { MainBarComponent } from './global-view/main-bar/main-bar.component';
import { SchoolTimeTableComponent } from './global-view/school-time-table/school-time-table.component';
import { OtherComponent } from './util/example/other/other.component';
import { CourseInfoComponent } from './pages/course/course-info/course-info.component';
import { StudentCourseInfoComponent } from './global-view/student-course-info/student-course-info.component';
import { DropCourseComponent } from './pages/course/drop-course/drop-course.component';
import { EnrollCourseComponent } from './pages/course/enroll-course/enroll-course.component';
import { RegisterComponent } from './pages/register/register.component';
import { TrackCourseComponent } from './pages/course/track-course/track-course.component';
import { AllCourseComponent } from './pages/course/all-course/all-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    NotificationComponent,
    IndexBarComponent,
    LoginComponent,
    EnrollCourseComponent,
    SideBarComponent,
    MainBarComponent,
    SchoolTimeTableComponent,
    OtherComponent,
    CourseInfoComponent,
    StudentCourseInfoComponent,
    DropCourseComponent,
    RegisterComponent,
    TrackCourseComponent,
    AllCourseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    Setting,
    StudentManager,
    HttpClient,
    NotificationManager,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
