import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionAgencesComponent } from './gestion-agences/gestion-agences.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'gestion-agences',
    pathMatch: 'full'
  },
  {
    path:'navbar',
    component: NavbarComponent
  },
  {
    path:'gestion-agences',
    component: GestionAgencesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
