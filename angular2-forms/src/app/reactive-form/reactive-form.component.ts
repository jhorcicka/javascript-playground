import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Country } from '../model/country'

@Component({
  selector: '',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent {
  countryList: Country[]
  contactForm: FormGroup

  constructor() {
    this.countryList = [
      new Country("1", "CZ"),
      new Country("2", "NL"),
      new Country("3", "TH")
    ]
    this.contactForm = new FormGroup({
      firstname: new FormControl('default-first-name', [Validators.required,Validators.minLength(5)]),
      lastname: new FormControl({ value: 'default-last-name', disabled: true }),
      email: new FormControl('@', [Validators.email,Validators.required]),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl(),
      address:new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode:new FormControl()
      })
    })
  }

  getCountryList(): Country[] {
    return this.countryList
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }
}
