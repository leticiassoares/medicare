import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss'],
})
export class DeleteCourseComponent implements OnInit {
  id: string;

  constructor(
    private service: CourseService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.aRoute.snapshot.params['id'];
    return this.service
      .deleteCourseById(this.id)
      .subscribe(() => this.router.navigate(['/courses']));
  }
}
