import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-glossarplants',
  templateUrl: './glossarplants.component.html',
  styleUrls: ['./glossarplants.component.css']
})
export class GlossarplantsComponent implements OnInit {

  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;

  title = 'Glossarplants';

  selectedchili: boolean = false;
  selectedPotato: boolean = false;
  selectedSucchini: boolean = false;
  selectedBasil: boolean = false;
  selectedPaprica: boolean = false;

  panelOpenState = false;
  

  constructor(private dataProvider: DataProviderService, private sanitizer: DomSanitizer) { }


  ngOnInit(): void { 
    this.selectedchili = true; 

    this.getImages(
      "http://localhost:7000/images/image1.jpg",
      "http://localhost:7000/images/image2.jpg",
      "http://localhost:7000/images/image3.jpg",
      "http://localhost:7000/images/image4.jpg",
      "http://localhost:7000/images/image5.jpg"
    );
  };

  activateChili(){
    this.selectedchili = true;
    this.selectedPotato = false;
    this.selectedSucchini = false;
    this.selectedBasil = false;
    this.selectedPaprica = false;
  }
  activatePotato(){
    this.selectedPotato = true;
    this.selectedchili = false;
    this.selectedSucchini = false;
    this.selectedBasil = false;
    this.selectedPaprica = false;
  }
  activateBasil(){
    this.selectedBasil = true;
    this.selectedchili = false;
    this.selectedPotato = false;
    this.selectedSucchini = false;
    this.selectedPaprica = false;
  }
  activateSucchini(){
    this.selectedSucchini = true;
    this.selectedchili = false;
    this.selectedPotato = false;
    this.selectedBasil = false;
    this.selectedPaprica = false;
  }
  activatePaprica(){
    this.selectedPaprica = true;
    this.selectedchili = false;
    this.selectedPotato = false;
    this.selectedSucchini = false;
    this.selectedBasil = false;
  }

  getImages(url1: string, url2: string, url3: string, url4: string, url5: string){
    this.dataProvider.getImage(url1)
      .subscribe(img =>{
        this.image1 = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });

      this.dataProvider.getImage(url2)
      .subscribe(img =>{
        this.image2 = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });

      this.dataProvider.getImage(url3)
      .subscribe(img =>{
        this.image3 = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });

      this.dataProvider.getImage(url4)
      .subscribe(img =>{
        this.image4 = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });

      this.dataProvider.getImage(url5)
      .subscribe(img =>{
        this.image5 = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });
  }

}
