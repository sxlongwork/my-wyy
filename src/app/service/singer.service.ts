import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import Qs from 'qs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { API_CONFIG, ServiceModule } from './service.module';
import { Singer } from './types/commondatatypes';

type SingerParams = {
  offset: number;
  limit: number;
  cat?: string;
}

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: "5001"
}

@Injectable({
  providedIn: ServiceModule
})
export class SingerService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private apiUrl
  ) { }

  getEnterSingers(args: SingerParams = defaultParams): Observable<Singer[]>{
    const params = new HttpParams({fromString: Qs.stringify(args)})
    // console.log('params', params)
    return this.http.get(this.apiUrl + 'artist/list', {params}).pipe(
      map(
        (res: {artists: Singer[]}) => res.artists
      ))
  }

}
