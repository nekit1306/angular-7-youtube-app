import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const routes = {
  chart: () => `/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=10&videoCategoryId=10`,
  channel: (id: string) => `/channels?id=${id}&part=snippet`,
  search: (query: string) => `/search?part=snippet&videoCategoryId=10&type=video&q=${query}`
};

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  constructor(private http: HttpClient) {}

  getChart(): Observable<any> {
    return this.http.get(routes.chart()).pipe(
      map((res: any) => res.items),
      mergeMap((res: any) => {
        const observables = res.map((musicItem: any) => this.getChannel(musicItem));
        return forkJoin(observables);
      }),
      catchError(() => of('Error, something went wrong'))
    );
  }

  getChannel(item: any): Observable<any> {
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
  getSearchMusic(q: string): Observable<any> {
    return this.http.get(routes.search(q)).pipe(
      map((res: any) => res.items),
      mergeMap((res: any) => {
        const observables = res.map((musicItem: any) => this.getChannel(musicItem));
        return forkJoin(observables);
      }),
      catchError(() => of('Error, something went wrong'))
    );
  }
}
