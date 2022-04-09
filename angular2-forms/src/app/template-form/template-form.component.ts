import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Country } from '../model/country'
import { Contact } from '../model/contact'
import { Address } from '../model/address'

@Component({
  selector: '',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.sass']
})
export class TemplateFormComponent implements OnInit {
  defaultCountry = new Country('2', 'USA')
  contact: Contact = new Contact("", "", "", "", true, new Country("0", ""), new Address("", "", ""))
  countryList: Country[] = []

  ngOnInit() {
    let address = new Address("Numbai", "Perry Cross Rd", "400050")
    //this.contact = new Contact("Sachin", "Tendulkar", "sachin@gmail.com", "male", true, this.defaultCountry, address)

    this.countryList = [
      new Country("1", "India"),
      this.defaultCountry,
      new Country('3', 'England')
    ]
  }

  changeCountry() {
    if (this.contact) {
      this.contact.country = this.defaultCountry
    }
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value)
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }
}
