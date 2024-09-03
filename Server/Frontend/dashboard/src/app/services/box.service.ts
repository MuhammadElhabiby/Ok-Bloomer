import { Injectable } from '@angular/core';
import { Box } from 'src/app/box';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  boxes: Box[] = [
    new Box("box1", 1, "Potatoes"),
    new Box("box2", 2, "Chili"),
    new Box("box3", 3, "Chili")
  ];

  selectedBox: Box = this.boxes[0];

  smallestAvailableId: number = null;

  constructor() { }

  setSelectedBox(selectedBox: Box){
    this.selectedBox = selectedBox;
    console.log("Selected Box is: " + selectedBox.getName());
  }

  getSelectedBox(){
    return this.selectedBox;
  }

  getBoxes(){
    return this.boxes;
  }

  getSmallestAvailableId(){
    return this.smallestAvailableId;
  }

  addBox(name: string, id: number, plant: string){
    this.boxes.push(new Box(name, id, plant));
    this.setSelectedBox(this.boxes[this.boxes.length - 1]);
    console.log("Added Box: " + name);
    
  }

  delBox(box: Box){
    if(this.boxes.length > 1){
      this.selectedBox = null;
    let deleteIndex = this.boxes.findIndex(x => {
      if(box === x){
        return true
      } else{
        return false};
    });
    this.boxes.splice(deleteIndex, 1);
    }
    console.log("Deleted Box: " + box.getName());
  }

  findSmallestAvailableId(){
    for(let i = 1; i <= this.boxes.length; i++){
      if(i !== this.boxes[i-1].getId()){
        this.smallestAvailableId = i;
        console.log(i);
        break;
      }else{
        this.smallestAvailableId = this.boxes.length + 1;
        console.log(this.boxes.length + 1);
      }
    }
    
  }

}
