import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userDetail: User = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    city: '',
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (res) => {
        const id = res.get('id');
        if (id) {
          this.userService.getUserById(id).subscribe({
            next: (res) => {
              this.userDetail = res;
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
      },
    });
  }
  updateUser(){
    this.userService.updateUser(this.userDetail.id,this.userDetail).subscribe({
      next:(res)=>{
        this.router.navigate(['users'])
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  deleteUser(id:string){
    this.userService.deleteUser(this.userDetail.id).subscribe({
      next:(res)=>{
        alert(`The User ${this.userDetail.name} has been deleted`)
        this.router.navigate(['users'])
      }
    })
  }
}
