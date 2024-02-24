import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { EstanteriasComponent } from './estanterias/estanterias.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:'',
  component:LayoutComponent,
    children:[
      { path:'', component: HomeComponent },
      { path:'libros', component: LibrosComponent },
      { path:'estanterias', component: EstanteriasComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutes { }