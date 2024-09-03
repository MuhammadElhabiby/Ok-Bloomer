import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from "@angular/common/http";
import { createInjectableType } from "@angular/compiler";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Request is on its way');
        console.log(req.url);
        const authToken = this.authService.getToken();
        console.log(authToken);

        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
                console.log('Response arrived, body data:');
                console.log(event.body);
            }
        }));
    }
}
