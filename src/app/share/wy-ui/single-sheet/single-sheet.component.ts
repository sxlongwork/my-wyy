import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SongSheet } from 'src/app/service/types/commondatatypes';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {

  @Input() songSheet: SongSheet
  constructor() { }

  ngOnInit(): void {
  }

}
