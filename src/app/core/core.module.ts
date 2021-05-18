import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from '../app-routing.module';
import { PagesModule } from '../pages/pages.module';
import { ServiceModule } from '../service/service.module';
import { ShareModule } from '../share/share.module';



registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  // 避免无效循环一直注入自身，使用@SkipSelf跳过自身检查
  // 避免当没找到CoreModule抛出错误，使用@Optional将parentModule赋值为null
  constructor(@SkipSelf() @Optional() parentModule: CoreModule){
    if (parentModule) {
      throw new Error("CoreNodule只能被AppModule引用")
    }
  }
 }
