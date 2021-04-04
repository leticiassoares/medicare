import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get(environment.JUNO_API);
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get(`${environment.JUNO_API}${id}`);
  }

  postCourse(value: any): Observable<any> {
    return this.http.post(environment.JUNO_API, value);
  }

  deleteCourseById(id: string): Observable<any> {
    return this.http.delete(`${environment.JUNO_API}${id}`);
  }

  editCourse(value: any): Observable<any> {
    return this.http.put(environment.JUNO_API, value);
  }
}
