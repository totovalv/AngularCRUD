import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
addUserRequest:User={
  id:'',
  name:'',
  email:'',
  phone:0,
  salary:0,
  city:''
}
  constructor(private userService: UsersService , private router:Router){

  }
  ngOnInit(): void {
    
  }
  addUser(){
    console.log(this.addUserRequest);
    this.userService.addUser(this.addUserRequest).subscribe({
      next:(user)=>{
        this.router.navigate(['users'])
      },
      error:(err)=>{
console.log(err);
         
      }
    })

  }
}
