import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing';
import { EstanteriasComponent } from './estanterias/estanterias.component';
import { LibrosComponent } from './libros/libros.component';
import { SharedAngularMaterial } from '../shared/shared-angular.material';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        LibrosComponent,
        EstanteriasComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedAngularMaterial,
        PagesRoutes,
        SharedModule
    ]
  })
  export class PagesModule { }