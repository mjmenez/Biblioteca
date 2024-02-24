import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LazyUrlInterceptor } from './shared/interceptors/lazy-url.interceptor';
import { SharedAngularMaterial } from './shared/shared-angular.material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [SharedAngularMaterial,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],exports:[
    SharedAngularMaterial
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:LazyUrlInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
