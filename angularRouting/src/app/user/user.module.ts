import { NgModule } from '@angular/core';
import { UserRouteConfig } from './user.route.config';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [UserRouteConfig],
  exports: []
})
export class UserModule {}
