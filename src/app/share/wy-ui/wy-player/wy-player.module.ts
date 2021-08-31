import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WySliderModule } from '../wy-slider/wy-slider.module';
import { WyPlayerComponent } from './wy-player.component';



@NgModule({
  declarations: [
    WyPlayerComponent
  ],
  imports: [
    CommonModule,
    WySliderModule
  ],
  exports: [
    WyPlayerComponent
  ]
})
export class WyPlayerModule { }
