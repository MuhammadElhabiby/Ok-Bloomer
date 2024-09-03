import { Component, OnDestroy, OnInit } from "@angular/core";
import { BoxService } from "src/app/services/box.service";
import { Box } from "src/app/box";
import { AuthService } from "../auth/signup/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription
    currentBox: Box = null;

    constructor(private boxService: BoxService,
                private authService: AuthService){}

      ngOnInit(): void {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService
        .getAuthStatusListener()
        .subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
        });
      }

      onLogout(){
        this.authService.logout();
      }

    ngDoCheck(){
        if(this.boxService.getSelectedBox() !== this.currentBox){
          this.currentBox = this.boxService.getSelectedBox();
        }
      }
      ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
      }
}