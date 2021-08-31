import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongSheet } from 'src/app/service/types/commondatatypes';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {

  @Input() songSheet: SongSheet
  @Output() onPlay = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  playSheet(id: number){
    this.onPlay.emit(id)
  }

}
