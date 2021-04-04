import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  course: FormGroup;
  workloads = [{ hours: '32' }, { hours: '78' }, { hours: '120' }];

  constructor(private service: CourseService, private router: Router) {}

  ngOnInit() {
    this.course = new FormGroup({
      name: new FormControl(null),
      code: new FormControl(null),
      description: new FormControl(null),
      workload: new FormControl(null),
    });
  }

  onSubmit() {
    return this.service
      .postCourse(this.course.value)
      .subscribe(() => this.router.navigate(['/courses']));
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }
}
