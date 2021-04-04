import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  course: FormGroup;
  id: string;
  workloads = [{ hours: '32' }, { hours: '78' }, { hours: '120' }];

  constructor(
    private service: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.course = new FormGroup({
      name: new FormControl(null),
      code: new FormControl(null),
      description: new FormControl(null),
      workload: new FormControl(null),
    });

    this.route.params.subscribe((params) => (this.id = params['id']));
    this.service.getCourseById(this.id).subscribe((response) => {
      this.course.patchValue(response);
    });
  }

  onSubmit() {
    this.service.editCourse(this.course.value).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }
}
