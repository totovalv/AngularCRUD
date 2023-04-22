import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[]|null=null
  
  constructor(private usersServices:UsersService){

  }
  ngOnInit(): void {
this.usersServices.getAllUsers()
.subscribe({
  next:(users)=>{
    this.users=users;
  },
  error:(res)=>{
    console.log(res);
    
  }
})
    
  }


}
