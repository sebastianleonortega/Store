import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from '@modules/user/Pages/user-list/user-list.component';
import { UserDetailComponent } from '@modules/user/Pages/user-detail/user-detail.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
