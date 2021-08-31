import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WySliderStyle } from './wy-slider-types';

// 底部播放器的按钮组件
@Component({
  selector: 'app-wy-slider-handle',
  template: `<div class="wy-slider-handle" [ngStyle]='style'></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderHandleComponent implements OnInit, OnChanges {

  @Input() wyVertical = false   // 判断是进度条时水平还是垂直，false是水平，默认
  @Input() wyOffset: number     // 偏移量
  style: WySliderStyle = {}

  constructor() { }
  // 监听按钮的变化
  ngOnChanges(changes: SimpleChanges): void {
    // 如果按钮的位置发生变化，判断是进度条时水平还是垂直，水平则对应改变left，垂直则改变botton值
    if(changes['wyOffset']){
      this.style[this.wyVertical ? 'bottom': 'left'] = this.wyOffset + '%'
    }
  }

  ngOnInit(): void {
  }

}
