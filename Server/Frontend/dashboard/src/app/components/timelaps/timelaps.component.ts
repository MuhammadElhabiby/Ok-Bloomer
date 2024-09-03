import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-timelaps',
  templateUrl: './timelaps.component.html',
  styleUrls: ['./timelaps.component.css']
})
export class TimelapsComponent implements OnInit{
  image: any;
  imageAlt: any;
  currentPicNumber: number = 0;
  currentPicName: string = "";
  arr: string[] = [];

  constructor(private dataProvider: DataProviderService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getImageNames();

    setTimeout(() => {
      this.setFirstImage();
    }, 100);
  }

  getImageNames(){
    this.dataProvider.getImgesInfo().subscribe(
      data => {
        let imgNameArr: string[] = [];
        for(let i = 0; i < data.length; i++){
          let imageInfo = JSON.parse(JSON.stringify(data[i]));
          let imageName = imageInfo.name;
          imgNameArr.push(imageName);
        }
        this.currentPicName = imgNameArr[this.currentPicNumber];
        this.arr = imgNameArr;
      }
    );
  }

  setFirstImage(){
    this.getImage("http://localhost:7000/images/" + this.arr[0] + ".jpg");
  }

  getNextImage(){
    this.currentPicNumber += 1;
    this.currentPicName = this.arr[this.currentPicNumber];
    if(this.currentPicNumber < this.arr.length){
      this.getImage("http://localhost:7000/images/" + this.arr[this.currentPicNumber] + ".jpg");
    }
    else{
      this.currentPicNumber = 0;
      this.currentPicName = this.arr[this.currentPicNumber];
      setTimeout(() => {
        this.getImage("http://localhost:7000/images/" + this.arr[this.currentPicNumber] + ".jpg");
      }, 300);
    }
    console.log(this.currentPicNumber)
    console.table(this.arr)
  }
  getPreviousImage(){
    this.currentPicNumber -= 1;
    this.currentPicName = this.arr[this.currentPicNumber];
    if(this.currentPicNumber > this.arr.length){
      this.getImage("http://localhost:7000/images/" + this.arr[this.currentPicNumber] + ".jpg");
    }
    else{
      this.currentPicNumber = 0;
      this.currentPicName = this.arr[this.currentPicNumber];
      setTimeout(() => {
        this.getImage("http://localhost:7000/images/" + this.arr[this.currentPicNumber] + ".jpg");
      }, 300);
    }

    console.log(this.currentPicNumber)
    console.table(this.arr)
  }

  getImage(url: string){
    this.dataProvider.getImage(url)
      .subscribe(img =>{
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });
  }

  addComment(form: NgForm){
    console.log(form.value)
    if (form.invalid) {
        return;
    }
    this.dataProvider.addComment(this.currentPicName, form.value.note);
  }
  
}