import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { API_CONFIG, ServiceModule } from './service.module';
import { Song, SongUrl } from './types/commondatatypes';




@Injectable({
  providedIn: ServiceModule
})
export class SongService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private apiUrl
  ) { }

  getSongUrl(ids: string): Observable<SongUrl[]>{
    const params = new HttpParams().set('id', ids)
    // console.log('params', params)
    return this.http.get(this.apiUrl + 'song/url', {params}).pipe(
      map(
        (res: {data: SongUrl[]}) => res.data
      ))
  }
  getSongList(songs: Song|Song[]): Observable<Song[]>{
    // console.log('songs', songs)
    const songArr = Array.isArray(songs)? songs: [songs];
    const ids = songArr.map(item => item.id).join(',');
    return this.getSongUrl(ids).pipe(map(urls => 
      this.generateSongList(songArr, urls)));
    
  }

  private generateSongList(songArr: Song[], urls: SongUrl[]): Song[]{
    const result = []
    songArr.forEach(song => {
      const url = urls.find(url => url.id === song.id);
      if (url) {
        result.push({...song, url});
      }
    });
    return result
  }

}
