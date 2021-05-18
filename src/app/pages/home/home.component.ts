import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { map } from 'rxjs/internal/operators';
// import { HomeService } from 'src/app/service/home.service';
// import { SingerService } from 'src/app/service/singer.service';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/service/types/commondatatypes';

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
  constructor(
    // private homeService: HomeService,
    // private singerService: SingerService,
    private route: ActivatedRoute
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
  //  getBanners(){
  //   this.homeService.getBanners().subscribe(
  //     banners =>{
  //       this.banners = banners
  //     }
  //   )
  //  }
  //  getHotTags(){
  //    this.homeService.getHotTags().subscribe(
  //      tags => {
  //        this.hotTags = tags;
  //       //  console.log(tags)
  //      }
  //    )
  //  }
  //  getPersonalSheetList(){
  //    this.homeService.getPersonalSheetList().subscribe(
  //      sheetlist => {
  //        this.songSheetList = sheetlist;
  //       //  console.log(sheetlist)
  //      }
  //    )
  //  }

  //  // 获取歌手列表
  //  getEnterSingerList(){
  //   this.singerService.getEnterSingers().subscribe(
  //     singers => {
  //       this.singers = singers
  //       // console.log('singers',singers)
  //     }
  //   )
  //  }

  ngOnInit(): void {
  }
  beforeChange({to}){
    this.bannerIndex = to
  }
  onChangeSlide(type: string){
    this.nzCarousel[type]()
  }

}
