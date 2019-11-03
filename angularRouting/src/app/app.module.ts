import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouteConfig } from './app.route.config';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [BrowserModule, SharedModule, AppRouteConfig],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
