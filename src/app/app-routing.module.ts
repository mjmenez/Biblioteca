import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  {path:'page', loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule)},
 // {path:'libros', loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule)},
  //{path:'estanterias', loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
