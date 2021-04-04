import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../services/course.service';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.scss'],
})
export class DetailsCourseComponent implements OnInit {
  id: any;
  course: any;
  logged: boolean;

  constructor(
    private service: CourseService,
    private authService: AuthService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];

    this.service
      .getCourseById(this.id)
      .subscribe((response) => (this.course = response));

    this.logged = this.authService.isAutenticado();
  }
}
