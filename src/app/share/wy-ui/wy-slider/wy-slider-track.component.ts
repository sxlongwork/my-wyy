import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WySliderStyle } from './wy-slider-types';

// 底部播放器的滑块组件
@Component({
  selector: 'app-wy-slider-track',
  template: `<div class="wy-slider-track" [ngStyle]='style'></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderTrackComponent implements OnInit,OnChanges {

  @Input() wyVertical = false   // 判断是进度条时水平还是垂直，false是水平，默认
  @Input() wyLength: number     // 偏移量
  style: WySliderStyle = {}
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['wyLength']){
      if(this.wyVertical){
        this.style.height = this.wyLength +'%';
        this.style.left = null;
        this.style.width = null
      } else {
        this.style.width = this.wyLength + '%';
        this.style.bottom = null;
        this.style.height = null;
      }
    }
  }

  ngOnInit(): void {
  }

}
