import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WySliderHandleComponent } from './wy-slider-handle.component';
import { WySliderTrackComponent } from './wy-slider-track.component';
import { WySliderComponent } from './wy-slider.component';



@NgModule({
  declarations: [
    WySliderComponent,
    WySliderTrackComponent,
    WySliderHandleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WySliderComponent
  ]
})
export class WySliderModule { }
