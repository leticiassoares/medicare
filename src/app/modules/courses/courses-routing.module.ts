import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/auth/guard/auth.guard';
import { DetailsCourseComponent } from './containers/course-details/details-course.component';
import { EditCourseComponent } from './containers/course-edit/edit-course.component';
import { DeleteCourseComponent } from './containers/course-delete/delete-course.component';
import { CreateCourseComponent } from './containers/course-create/create-course.component';
import { ListCourseComponent } from './containers/course-list/list-course.component';

const coursesRoutes: Routes = [
  {
    path: '',
    component: ListCourseComponent,
  },
  { path: 'details/:id', component: DetailsCourseComponent },
  {
    path: 'create',
    component: CreateCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'delete/:id',
    component: DeleteCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
