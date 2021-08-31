import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
// import * as EventEmitter from 'events';
// 轮播组件
@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush // 变更检测策略
})
export class WyCarouselComponent implements OnInit {
  // @Output() changeSlide = new EventEmitter<string>();
  @Output() changeSlide = new EventEmitter<'pre'|'next'>();
  @Input() activeIndex: Number = 0;
  @ViewChild('dot') private dotRef: TemplateRef<any>;
  constructor(
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.cd.detectChanges();
  }

  onChangeSlide(type: 'pre'|'next'){
    this.changeSlide.emit(type)
  }

}
