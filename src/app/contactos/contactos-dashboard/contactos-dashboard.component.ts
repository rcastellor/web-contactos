import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/shared/model/contacto.model';
import { ContactoService } from '../contactos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactos-dashboard',
  templateUrl: './contactos-dashboard.component.html',
  styleUrls: ['./contactos-dashboard.component.css']
})
export class ContactosDashboardComponent implements OnInit {

  contactos$: Observable<Contacto[]>;
  seleccionado: Contacto;
  cargando$: Observable<boolean>;

  constructor(private _contactoService: ContactoService) {
    this.contactos$ = this._contactoService.entities$;
    this.cargando$ = this._contactoService.loading$;
  }

  ngOnInit() {
    this.getContactos();
  }

  getContactos() {
    this._contactoService.getAll();
    this.close();
  }

  close() {
    this.seleccionado = null;
  }

  select(contacto: Contacto) {
    this.seleccionado = contacto;
  }

  add(contacto: Contacto) {
    console.log('add');
    this._contactoService.add(contacto);
  }

  update(contacto: Contacto) {
    console.log('update');
    this._contactoService.update(contacto);
  }
}
