import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccommodationComponent } from './modules/accommodation/create-accommodation/create-accommodation.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/users/register/register.component';

const routes: Routes = [
  { path: 'accommodation/create', component: CreateAccommodationComponent },
  {path: 'login',component: LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
