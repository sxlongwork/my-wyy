import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/internal/operators';
import { API_CONFIG, ServiceModule } from './service.module';
import { SongService } from './song.service';
import { Song, SongSheet } from './types/commondatatypes';




@Injectable({
  providedIn: ServiceModule
})
export class SheetService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private apiUrl,
    private songService: SongService
  ) { }

  getSongSheetDetail(id: number): Observable<SongSheet>{
    const params = new HttpParams().set('id', id.toString())
    // console.log('params', params)
    return this.http.get(this.apiUrl + 'playlist/detail', {params}).pipe(
      map(
        (res: {playlist: SongSheet}) => res.playlist
      ))
  }

  playSheet(id: number): Observable<Song[]>{
    return this.getSongSheetDetail(id)
    .pipe(pluck('tracks'), switchMap(
      tracks => this.songService.getSongList(tracks)
      ));
  }

}
