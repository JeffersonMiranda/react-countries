import axios from 'axios'

export default class CountriesService {
  constructor() {
    this.baseUrl = 'https://restcountries.eu/rest/v2/'
  }

  async getAll() {
    return await axios.get(`${ this.baseUrl }all`)
  }

  async getByContinent({ continent }) {
    return await axios.get(`${ this.baseUrl }region/${ continent }`)
  }
}