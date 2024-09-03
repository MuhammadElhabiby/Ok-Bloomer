import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/signup/auth.service';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public dataTemp: number[] = [];
  public lastTemp: number = 0;

  constructor() { }

  ngOnInit(): void {}

}
