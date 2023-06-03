import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{

  users: any;
   id: number;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ){
   this.id = this.route.snapshot.params['id'];
  }

ngOnInit(): void {
 this.currentUser = this.userService.getUserById(this.id).subscribe(resp =>{
  this.currentUser = resp;
 })

}
}
