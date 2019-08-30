import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

const routes = {
  chart: () => `/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=10&videoCategoryId=10`,
  channel: (id: string) => `/channels?id=${id}&part=snippet`
};

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  public getTopChart(): Observable<any> {
    return this.http.get(routes.chart()).pipe(
      map((res: any) => res.items),
      mergeMap((res: any) => {
        const observables = res.map((musicItem: any) => this.getMusicWithChannel(musicItem));
        return forkJoin(observables);
      }),
      catchError(() => of('Error, something went wrong'))
    );
  }

  private getMusicWithChannel(item: any): Observable<any> {
    return this.http.get(routes.channel(item.snippet.channelId)).pipe(
      map((res: any) => {
        return {
          video: item,
          channel: res.items[0]
        };
      }),
      catchError(() => of('Error, something went wrong'))
    );
  }
}
