import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../components/timelaps/note.model';
import { AuthService } from '../components/auth/signup/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllData(): Observable<JSON[]>{
    return this.http.get<JSON[]>("http://localhost:7000/api/plants/data");
  }

  getImgesInfo(): Observable<JSON[]>{
    return this.http.get<JSON[]>("http://localhost:7000/api/boxes/images");
  }

  getImage(url: string){
    return this.http.get(url, { responseType: 'blob' });
  }

  addComment(name:string, note: string){
    const notes: Note = {
      name: name, 
      note: note
    };
    this.http.post<{ message: string }>('http://localhost:7000/api/boxes/addImageNote', notes)
      .subscribe((responseData: { message: any; }) =>{
        console.log(responseData.message)
      });
  }

}