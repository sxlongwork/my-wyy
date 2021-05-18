import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { API_CONFIG, ServiceModule } from './service.module';
import { Banner, HotTag, SongSheet } from './types/commondatatypes';

@Injectable({
  providedIn: ServiceModule
})
export class HomeService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private apiUrl
  ) { }

  getBanners(): Observable<Banner[]>{
    return this.http.get(this.apiUrl + 'banner').pipe(
      map(
        (res: {banners: Banner[]}) => res.banners
      ))
  }

  getHotTags(): Observable<HotTag[]>{
    return this.http.get(this.apiUrl + 'playlist/hot').pipe(
      map(
        (res: {tags: HotTag[]}) => {
          return res.tags.sort(
            (a: HotTag, b:HotTag)=> {
              return a.position - b.position
            }
          ).slice(0,5)
        }
      )
    );
  }

  getPersonalSheetList(): Observable<SongSheet[]>{
    return this.http.get(this.apiUrl + 'personalized').pipe(
      map(
        (res: {result: SongSheet[]}) => res.result.slice(0,16)
      )
    );
  }
}
