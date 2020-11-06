import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }

  userAdded = new Subject();
  
  createUser(obj){
   return this.http.post("http://localhost:5555/data", obj);
  }

  getLatestusers(){
    return this.http.get("http://localhost:5555/data");
  }
  
  informChild(){
    this.userAdded.next();
  }


}
