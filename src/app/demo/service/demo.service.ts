import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { XMLResponse } from '../interfaces/xml-response';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  constructor() {}

  upload(file: File): Observable<XMLResponse> {
    const url = `${this.baseUrl}/api/upload`;

    const formData = new FormData();
    formData.append('file', file);

    return this.http
      .post<XMLResponse>(url, formData, {
        headers: { Accept: 'application/json' },
      })
      .pipe(catchError((err) => throwError(() => err.error)));
  }

  export(data: any): Observable<Blob> {
    const url = `${this.baseUrl}/api/export`;

    return this.http
      .post(url, { data }, { responseType: 'blob' })
      .pipe(catchError((err) => throwError(() => err.error)));
  }
}
