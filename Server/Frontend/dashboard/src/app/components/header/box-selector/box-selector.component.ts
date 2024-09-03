import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';
import { Box } from 'src/app/box';

@Component({
  selector: 'app-box-selector',
  templateUrl: './box-selector.component.html',
  styleUrls: ['./box-selector.component.css']
})
export class BoxSelectorComponent implements OnInit {
  boxes: Box[] = null;
  selected: Box = null;

  constructor(private boxService: BoxService) { }

  ngOnInit(): void {
    this.boxes = this.boxService.getBoxes();
    this.selected = this.boxes[0];
  }

  ngDoCheck(){
    if(this.boxService.getSelectedBox() !== this.selected){
      this.selected = this.boxService.getSelectedBox();
    }
  }

  changeSelectedBox(){
    this.boxService.setSelectedBox(this.selected);
  }

  deleteCurrentBox(){
    this.boxService.delBox(this.selected);
    this.boxService.findSmallestAvailableId();
}

}
