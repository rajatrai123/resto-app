import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ ListRestoComponent} from './list-resto/list-resto.component';
import{AddRestoComponent} from './add-resto/add-resto.component';
import {LoginComponent} from './login/login.component'
import{RegisterComponent} from './register/register.component'
import{UpdateRestoComponent} from './update-resto/update-resto.component'

const routes: Routes = [
  {
    component: ListRestoComponent,
    path : 'list'
  },
  {
    component: AddRestoComponent,
    path : 'add'
  },
  {
    component: LoginComponent,
    path : 'login'
  },
  {
    component: RegisterComponent,
    path : 'register'
  },
  {
    component: UpdateRestoComponent,
    path:'update'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
