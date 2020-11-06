import { Component, OnInit, ɵConsole } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allUsers: any;

  constructor( private userService:UserService ) { }

  ngOnInit() {
    this.userService.userAdded.subscribe( res => {
    this.getLatestUsers1();
 
  });
  this.getLatestUsers1();      

  }

 getLatestUsers1(){ 
    this.userService.getLatestusers().subscribe(res =>{
      this.allUsers = res;
    });
   }

   key:string = "lastName";
   reverse:boolean = false;
   sort(key){
   this.key = key;
   this.reverse = !this.reverse;
   }
   


}
