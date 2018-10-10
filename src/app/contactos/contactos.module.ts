import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosListComponent } from './contactos-list/contactos-list.component';
import { ContactosEditComponent } from './contactos-edit/contactos-edit.component';

import { ContactosDashboardComponent } from './contactos-dashboard/contactos-dashboard.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { ContactosRoutingModule } from './contactos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContactosRoutingModule,
    ClarityModule,
    ClrFormsNextModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactosDashboardComponent,
    ContactosListComponent,
    ContactosEditComponent
  ]
})
export class ContactosModule {
}
