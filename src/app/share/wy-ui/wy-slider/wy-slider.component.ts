import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

// 播放进度条组件(按钮和滑块组成)
@Component({
  selector: 'app-wy-slider',
  templateUrl: './wy-slider.component.html',
  styleUrls: ['./wy-slider.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
