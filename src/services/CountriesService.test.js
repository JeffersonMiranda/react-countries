import axios from 'axios'
import CountriesService from './CountriesService'

// jest.mock('axios') // HERE MOCKS ALL AXIOS MODULE WITH ITS FUNCTIONS

describe('Countries API Service', () => {  
  beforeEach(() => {
    axios.get = jest.fn() // HERE MOCKS ONLY THE GET FUNCTION, THAT'S ONLY WHAT IT'S NEEDED FOR NOW
  })

  it('should get all countries successfully from API', () => {
    const data = [{ name: "Brazil"}]
    
    axios.get.mockResolvedValue(data) // MOCK DIRECTLY THE DATA
    
    const countriesService = new CountriesService()
    
    return countriesService.getAll().then(response => {
      expect(response).toEqual(data)
    })
  })

  it('should not get all countries successfully from API', () => {
    const errorMessage = "Error on fetching countries"
    const countriesService = new CountriesService()

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage))) 
    // THIS ONE MOCKS A REJECTED PROMISE WITH ERROR MESSAGE

    return expect(countriesService.getAll()).rejects.toThrow(errorMessage)
  })

  it('should get countries by existing continent', () => {
    const continent = "Asia"
    const countriesByContinent = [{ name: "Estonia" }, {name: "Russia"}]

    const countriesService = new CountriesService()

    axios.get.mockResolvedValue(countriesByContinent)

    return countriesService.getByContinent(continent).then(response => {
      expect(response).toEqual(countriesByContinent)
    })
  })

  it.todo('should not get countries by inexisting contintent')
})