import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CoursesRoutingModule } from './courses-routing.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

import { ListCourseComponent } from './containers/course-list/list-course.component';
import { CreateCourseComponent } from './containers/course-create/create-course.component';
import { EditCourseComponent } from './containers/course-edit/edit-course.component';
import { DeleteCourseComponent } from './containers/course-delete/delete-course.component';
import { DetailsCourseComponent } from './containers/course-details/details-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@NgModule({
  declarations: [
    ListCourseComponent,
    CreateCourseComponent,
    EditCourseComponent,
    DeleteCourseComponent,
    DetailsCourseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoursesRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CourseService],
})
export class CoursesModule {}
