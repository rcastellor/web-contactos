import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Contacto } from 'src/app/shared/model/contacto.model';

@Component({
  selector: 'app-contactos-edit',
  templateUrl: './contactos-edit.component.html',
  styleUrls: ['./contactos-edit.component.css']
})
export class ContactosEditComponent implements OnInit, OnChanges {

  @Input() contacto: Contacto;
  @Output() add = new EventEmitter<Contacto>();
  @Output() update = new EventEmitter<Contacto>();
  @Output() unselect = new EventEmitter<string>();

  @ViewChild('nombre') nombreElement: ElementRef;

  addMode = true;

  form = this._fb.group({
    id: [],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: [''],
    telefono: ['']
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    if (this.addMode) {
      this.addContacto(form);
    } else {
      this.updateContacto(form);
    }
  }

  addContacto(form: FormGroup) {
    const {value, valid, touched} = form;
    if (touched && valid) {
      this.add.emit({...this.contacto, ...value});
    }
    this.close();
  }

  updateContacto(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.contacto, ...value });
    }
    this.close();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.contacto && this.contacto.id) {
      this.form.patchValue(this.contacto);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  close() {
    this.unselect.emit();
  }

  setFocus() {
    this.nombreElement.nativeElement.focus();
  }

}
