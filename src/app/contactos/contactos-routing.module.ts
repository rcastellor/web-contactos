import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosDashboardComponent } from './contactos-dashboard/contactos-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ContactosDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactosRoutingModule { }
