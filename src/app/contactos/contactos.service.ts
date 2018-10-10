import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';

import { Contacto } from '../shared/model/contacto.model';

@Injectable(
    {
        providedIn: 'root'
})
export class ContactoService extends EntityCollectionServiceBase<Contacto> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Contacto', serviceElementsFactory);
  }
}
