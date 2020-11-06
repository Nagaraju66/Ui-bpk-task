import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 constructor( private userService:UserService ){

 }

  addUser(userForm){    
    let obj = userForm.value;  
    this.userService.createUser(obj).subscribe( response => {
      userForm.form.reset();
      this.userService.informChild();
    })

  }


}
