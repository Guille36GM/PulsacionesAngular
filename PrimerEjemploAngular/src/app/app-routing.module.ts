import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
// import { HomeComponent } from './home/home.component';
import { RestaComponent } from './resta/resta.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'resta', component: RestaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
