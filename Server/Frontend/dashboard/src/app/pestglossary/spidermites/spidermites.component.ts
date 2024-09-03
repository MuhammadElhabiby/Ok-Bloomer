import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-spidermites',
  templateUrl: './spidermites.component.html',
  styleUrls: ['./spidermites.component.css']
})
export class SpidermitesComponent implements OnInit {

  image: any;

  constructor(private dataProvider: DataProviderService, private sanitizer: DomSanitizer) { }
 
  ngOnInit(): void {
    this.getImage("http://localhost:7000/images/image6.jpg")
  }

  getImage(url: string){
    this.dataProvider.getImage(url)
      .subscribe(img =>{
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });
  }

}
