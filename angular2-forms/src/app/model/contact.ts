import { Country } from './country'
import { Address } from './address'

export class Contact {
  firstname: string
  lastname: string
  email: string
  gender: string
  isMarried: boolean
  country: Country 
  address: Address

  constructor(firstname: string, lastname: string, email: string, gender: string, isMarried: boolean, country: Country, address: Address) {
    this.firstname = firstname
    this.lastname = lastname
    this.email = email
    this.gender = gender
    this.isMarried = isMarried
    this.country = country
    this.address = address
  }
} 
