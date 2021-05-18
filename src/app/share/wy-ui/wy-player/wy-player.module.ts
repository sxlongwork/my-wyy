import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WyPlayerComponent } from './wy-player.component';



@NgModule({
  declarations: [
    WyPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WyPlayerComponent
  ]
})
export class WyPlayerModule { }
