import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { map } from 'rxjs/internal/operators';
import { SheetService } from 'src/app/service/sheet.service';
// import { HomeService } from 'src/app/service/home.service';
// import { SingerService } from 'src/app/service/singer.service';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/service/types/commondatatypes';

// 首页组件
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @ViewChild(NzCarouselComponent) private nzCarousel: NzCarouselComponent
  banners: Banner[];
  hotTags: HotTag[];
  songSheetList: SongSheet[]
  bannerIndex = 0;
  singers: Singer[];
  songSheetDetail;
  constructor(
    // private homeService: HomeService,
    // private singerService: SingerService,
    private route: ActivatedRoute,
    private sheetService: SheetService
  ) {
    // 通过HomeResolverService路由守卫获取首页收据
    this.route.data.pipe(map(res => res.homeDatas)).subscribe(
      ([banners, hotTags, songSheetList, singers]) => {
      // console.log('res', res)
      this.banners = banners;
      this.hotTags = hotTags;
      this.songSheetList = songSheetList;
      this.singers = singers
    });
    // this.getBanners();
    // this.getHotTags();
    // this.getPersonalSheetList();
    // this.getEnterSingerList()
   }


  ngOnInit(): void {
  }
  beforeChange({to}){
    this.bannerIndex = to
  }
  onChangeSlide(type: string){
    this.nzCarousel[type]()
  }
  onPlaySheet(id:number){
    // console.log('id',id)
    this.sheetService.playSheet(id).subscribe(res =>
      // res => this.songSheetDetail = res;
      console.log('res', res)
    );
  }

  

}
