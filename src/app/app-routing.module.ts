import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaComponent } from './agenda-component/agenda/agenda.component';
import { HomeComponent } from './home-component/home/home.component';

const routes: Routes = [
  { path: 'agenda', component: AgendaComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
