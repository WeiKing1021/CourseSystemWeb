import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { EnrollCourseComponent } from './pages/course/enroll-course/enroll-course.component';
import { DropCourseComponent } from './pages/course/drop-course/drop-course.component';
import { RegisterComponent } from './pages/register/register.component';
import { TrackCourseComponent } from './pages/course/track-course/track-course.component';
import { AllCourseComponent } from './pages/course/all-course/all-course.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'allCourse', component: AllCourseComponent },
  { path: 'enrollCourse', component: EnrollCourseComponent },
  { path: 'dropCourse', component: DropCourseComponent },
  { path: 'trackCourse', component: TrackCourseComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
