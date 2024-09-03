import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../signup/auth.service";

@Component({
selector:'app-login',
templateUrl: './login.component.html',
styleUrls:['./login.component.css']  
})
export class LoginComponent{
isLoading = false;
constructor(public authService: AuthService){}
onLogin(form: NgForm){
    console.log(form.value)
if (form.invalid){
    return;
}
this.authService.login(form.value.email, form.value.password);

}
//email: string;
//password: string;

//onLogin(form: NgForm){
        
  // if (form.value.email=== 'atefeh@yahoo.com' && form.value.password==='test123456'){
     // console.log('hi');

  //  }
//}
}