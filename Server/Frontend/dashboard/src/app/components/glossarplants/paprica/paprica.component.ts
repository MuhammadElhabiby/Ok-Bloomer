import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-paprica',
  templateUrl: './paprica.component.html',
  styleUrls: ['./paprica.component.css']
})
export class PapricaComponent implements OnInit {

  image: any;

  constructor(private dataProvider: DataProviderService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getImage("http://localhost:7000/images/image5.jpg")
  }

  getImage(url: string){
    this.dataProvider.getImage(url)
      .subscribe(img =>{
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img));
      });
  }

}
