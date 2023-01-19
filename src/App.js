import { useState } from 'react'
import data from './Components/NavigationBar/Mocks/Mock'
import NavigationBar from './Components/NavigationBar/index'
import { MainFrame, Title } from './styles.js'
import SelectCountryDropdown from './Components/SelectCountryDropdown/SelectCountryDropdown'
import { useCountry } from './Components/ApiLocalCountryReturm/ApiCallCountry'
import NewsContainer from './Components/NewsContainer/NewsContainer'

function App () {
  const [countryState, setCountry] = useState(['United States', 'us'])
  const [category, setCategory] = useState('general')

  const countryName = useCountry().country
  let countryCode = useCountry().country_code
  if (countryCode !== undefined) {
    countryCode = countryCode.toLowerCase()
  }

  const ChangeCategory = (category) => {
    setCategory(category)
    console.log(category)
  }
  const ChangeCountry = (country) => {
    setCountry(country)
  }

  return (
    <MainFrame className='App'>
      <header className='App-header'>
        <SelectCountryDropdown
          onChange={ChangeCountry}
          selected={countryState[0]}
        />
        <Title className='Title'> Mr Worldwide </Title>
        <NavigationBar categories={data} onChange={ChangeCategory} />

      </header>
    </MainFrame>
  )
}
// <NewsContainer localCountry={countryState[1]} category = {categoryState} />
export default App
