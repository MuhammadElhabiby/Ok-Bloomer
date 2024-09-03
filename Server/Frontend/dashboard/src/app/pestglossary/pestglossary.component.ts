import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pestglossary',
  templateUrl: './pestglossary.component.html',
  styleUrls: ['./pestglossary.component.css']
})
export class PestglossaryComponent implements OnInit {

  image6: any;
  image7: any;
  image8: any;

  title = 'Pestglossary';

  selectedspidermites: boolean = false;
  selectedthrips: boolean = false;
  selectedwhiteflies: boolean = false;

  panelOpenState = false;
  

  constructor(private dataProvider: DataProviderService, private sanitizer: DomSanitizer) { }


  ngOnInit(): void { 
    this.selectedspidermites = true; 

    this.getImages(
      "http://localhost:7000/images/image6.jpg",
      "http://localhost:7000/images/image7.jpg",
      "http://localhost:7000/images/image8.jpg",
    );
  };

  activatespidermites(){
    this.selectedspidermites = true;
    this.selectedthrips = false;
    this.selectedwhiteflies = false;
  }
  activatethrips(){
    this.selectedthrips = true;
    this.selectedspidermites = false;
    this.selectedwhiteflies = false;
  }
  activatewhiteflies(){
    this.selectedwhiteflies = true;
    this.selectedspidermites = false;
    this.selectedthrips = false;
  }

  getImages(url6: string, url7: string, url8: string){
    this.dataProvider.getImage(url6)
      .subscribe(img =>{
        this.image6 = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });

      this.dataProvider.getImage(url7)
      .subscribe(img =>{
        this.image7 = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });

      this.dataProvider.getImage(url8)
      .subscribe(img =>{
        this.image8 = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });
  }

}
