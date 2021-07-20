import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaComponent } from '../app/agenda/agenda.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  { path: 'agenda', component: AgendaComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
