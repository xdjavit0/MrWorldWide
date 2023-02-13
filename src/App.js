import { useState, useEffect } from 'react'
import data from './Components/NavigationBar/Mocks/Mock'
import NavigationBar from './Components/NavigationBar/index'
import { MainFrame, Title } from './styles.js'
import SelectCountryDropdown from './Components/SelectCountryDropdown/SelectCountryDropdown'
import { GetCountry } from './Components/ApiLocalCountryReturm/ApiCallCountry'
import NewsContainer from './Components/NewsContainer/NewsContainer'

function App () {
  const [countryState, setCountry] = useState([])
  const [category, setCategory] = useState('general')

  useEffect(() => {
    GetCountry().then(data => setCountry([data.country, data.country_code.toLowerCase()]))
  }, [])

  const ChangeCategory = (category) => {
    setCategory(category)
  }

  const ChangeCountry = (country) => {
    setCountry(country)
  }

  return (

    <MainFrame className='App'>
      <header className='App-header'>
        <SelectCountryDropdown
          onChange={ChangeCountry}
          selected={countryState}
        />
        <Title className='Title'> Mr Worldwide </Title>
        <NavigationBar categories={data} onChange={ChangeCategory} />

      </header>
      <NewsContainer localCountry={countryState[1]} category={category} />
    </MainFrame>
  )
}

export default App

/* const url = 'http://ipwho.is/'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountry([response.data.country, response.data.country_code])
    })
  }, [url]) */
