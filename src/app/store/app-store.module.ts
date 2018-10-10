import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxDataModule, DefaultDataServiceConfig } from 'ngrx-data';

import { environment } from '../../environments/environment';
import { entityConfig } from './entity-metadata';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:8080',
  entityHttpResourceUrls: {
    Contacto: {
      collectionResourceUrl: 'http://localhost:8080/contactos',
      entityResourceUrl: 'http://localhost:8080/contactos'
  }}
};

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    NgrxDataModule.forRoot(entityConfig)
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    }
  ]
})

export class AppStoreModule {}
