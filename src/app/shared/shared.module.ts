import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAngularMaterial } from '../shared/shared-angular.material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { LazyloadingComponent } from './components/lazyloading/lazyloading.component';

@NgModule({
    declarations: [
    LayoutComponent,
    NavbarComponent,
    AlertComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        SharedAngularMaterial,
        LazyloadingComponent
    ],
    exports:[
        FormsModule,
        ReactiveFormsModule,
        LazyloadingComponent
    ]
  })
  export class SharedModule { }