import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss'],
})
export class ListCourseComponent implements OnInit {
  courses: Array<Object>;
  logged: boolean;

  constructor(
    private service: CourseService,
    private authService: AuthService
  ) {
    this.service
      .getCourses()
      .subscribe(response => this.courses = response);
  }

  ngOnInit() {
    
    this.logged = this.authService.isAutenticado();
  }
}
