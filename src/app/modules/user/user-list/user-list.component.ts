import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  // users: IUserList []= [];
  users: any;
  public isLoading = true;

  constructor (
    private userService : UserService
  ){
    this.users = this.userService.GetAllUser().subscribe((resp) => {
      this.users = resp;

    })
  }
  ngOnInit(){

  }
ngAfterViewInit(){
  setTimeout(() => {
this.isLoading = false;
  }, 2000);
}

}
