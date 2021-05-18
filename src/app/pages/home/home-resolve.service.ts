import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { first } from 'rxjs/internal/operators';
import { HomeService } from 'src/app/service/home.service';
import { SingerService } from 'src/app/service/singer.service';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/service/types/commondatatypes';


type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];
/**
 * 路由守卫，保证数据获取后在进行跳转，防止数据延迟而出现短暂空组件的情况，以此增强用户体验
 * HomeResolverService可以提前获取轮播、热门推荐、歌单、歌手等数据
 */
@Injectable()
export class HomeResolverService implements Resolve<HomeDataType> {
  constructor(
    private homeServe: HomeService,
    private singerServe: SingerService
  ) {}
  resolve(): Observable<HomeDataType> {
    return forkJoin([
        this.homeServe.getBanners(),
        this.homeServe.getHotTags(),
        this.homeServe.getPersonalSheetList(),
        this.singerServe.getEnterSingers()
    ]).pipe(first());   // first()只发出Observable最初发出的一个值
  }
}
