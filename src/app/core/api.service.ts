import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';

const API_KEY = environment.serverApiKey;

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  apiGet(path: string, bodyParams: Object = {}): Observable<any> {
    let params: HttpParams = new HttpParams();

    if (!bodyParams.hasOwnProperty('key')) {
      Object.assign(bodyParams, {
        key: API_KEY
      });
    }

    for (const key in bodyParams) {
      if (bodyParams.hasOwnProperty(key)) {
        const val = bodyParams[key];
        params = params.append(key, val);
      }
    }

    return this.http.get(`${environment.serverUrl}${path}`, { params }).pipe(catchError(this.formatErrors));
  }

  apiPut(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.serverUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }

  apiPost(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.serverUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }

  apiDelete(path: string): Observable<any> {
    return this.http.delete(`${environment.serverUrl}${path}`).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
      return throwError(error.error);
  }
}
