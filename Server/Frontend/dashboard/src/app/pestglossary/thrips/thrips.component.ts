import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-thrips',
  templateUrl: './thrips.component.html',
  styleUrls: ['./thrips.component.css']
})
export class ThripsComponent implements OnInit {

  image: any;

  constructor(private dataProvider: DataProviderService, private sanitizer: DomSanitizer) { }
 
  ngOnInit(): void {
    this.getImage("http://localhost:7000/images/image7.jpg")
  }

  getImage(url: string){
    this.dataProvider.getImage(url)
      .subscribe(img =>{
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });
  }

}
