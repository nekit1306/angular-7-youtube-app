import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  apiGet(path: string, bodyParams: Object = {}): Observable<any> {
    let params: HttpParams = new HttpParams();

    for (const key in bodyParams) {
      if (bodyParams.hasOwnProperty(key)) {
        const val = bodyParams[key];
        params = params.append(key, val);
      }
    }

    return this.http.get(`${path}`, { params }).pipe(catchError(this.formatErrors));
  }

  apiPut(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }

  apiPost(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }

  apiDelete(path: string): Observable<any> {
    return this.http.delete(`${path}`).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
