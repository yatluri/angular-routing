import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: 'login'
  }
];
@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRouteConfig {}
