import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { WyUiModule } from './wy-ui/wy-ui.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
    NzCarouselModule,
    WyUiModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
    NzCarouselModule,
    WyUiModule,
    
  ]
})
export class ShareModule { }
