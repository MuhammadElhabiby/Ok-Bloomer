import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-add-box',
  templateUrl: './add-box.component.html',
  styleUrls: ['./add-box.component.css']
})
export class AddBoxComponent implements OnInit {
  name: string = null;
  smallestAvailableId: number = this.boxService.getSmallestAvailableId();
  plants: string[] = ["Potatoes", "Chili"];
  selectedPlant: string = null;

  constructor(private boxService: BoxService) { }

  ngOnInit(): void {
    this.boxService.findSmallestAvailableId();
  }

  ngDoCheck(){
    if(this.smallestAvailableId !== this.boxService.getSmallestAvailableId()){
      this.smallestAvailableId = this.boxService.getSmallestAvailableId();
    }
  }

  addBox(){
    this.boxService.addBox(this.name, this.smallestAvailableId, this.selectedPlant);
    this.boxService.findSmallestAvailableId();
  }
}
