import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthData } from "./auth.data.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
    private token: string;
    private tokenTimer: any;
    private authStatusListener = new Subject<boolean>()
    private isAuthenticated = false;

    constructor(private http: HttpClient,
        private router: Router) { }

    getToken() {
        return this.token;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    
    getIsAuth() {
        return this.isAuthenticated;
    }
    createUser(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };
        this.http.post("http://localhost:7000/api/users/register", authData)
            .subscribe(response => {
                console.log(response);
            });
    }
    login(email: string, password: string) {
        //if (email==='atefeh@yahoo.com' && password==='test123456' ){

        //this.router.navigate(['/charts']);

        //}
        const authData: AuthData = { email: email, password: password };

        this.http.post<{ token: string, expiresIn: number}>("http://localhost:7000/api/users/authenticate", authData)
            .subscribe(response => {
                console.log(response);
                const token = response.token;
                this.token = token;
                if (token) {
                    const expiresInDuration = response.expiresIn;
                    console.log(expiresInDuration);
                    this.setAuthTimer(expiresInDuration);
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    const now = new Date();
                    const expirationDate = new Date (now.getTime() + expiresInDuration *1000);
                    console.log(expirationDate);
                    this.saveAuthData(token, expirationDate);
                    this.router.navigate(['/charts']);
                }
            });
    }
    autoAuthUser(){
     const authInformation = this.getAuthData();
     if (!authInformation){
        return;
     }
     const now = new Date();
     const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
     console.log(authInformation, expiresIn)
     if (expiresIn> 0){
        this.token = authInformation.token;
        this.isAuthenticated = true;
        this.setAuthTimer(expiresIn / 1000);
        this.authStatusListener.next(true);
     }

    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer)
        this.clearAuthData();
        this.router.navigate(['/login']);
    }
    private setAuthTimer(duration: number) {
        console.log ("Setting timer" + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration *1000)
    }
    private saveAuthData(token: string, expirationDate:Date ){
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
    }

    private clearAuthData(){
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    }

    private getAuthData(){
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        if (!token || !expirationDate) {
            return null;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
        }
        }
    }
    

