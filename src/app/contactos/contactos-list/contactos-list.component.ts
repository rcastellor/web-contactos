import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from 'src/app/shared/model/contacto.model';

@Component({
  selector: 'app-contactos-list',
  templateUrl: './contactos-list.component.html',
  styleUrls: ['./contactos-list.component.css']
})
export class ContactosListComponent implements OnInit {

  @Input() contactos: Contacto[];

  constructor() { }

  ngOnInit() {
  }

}
