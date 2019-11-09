import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: '', redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
