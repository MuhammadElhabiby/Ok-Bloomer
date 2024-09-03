import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-basil',
  templateUrl: './basil.component.html',
  styleUrls: ['./basil.component.css']
})
export class BasilComponent implements OnInit {

  image: any;

  constructor(private dataProvider: DataProviderService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getImage("http://localhost:7000/images/image3.jpg")
  }

  getImage(url: string){
    this.dataProvider.getImage(url)
      .subscribe(img =>{
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });
  }

}
