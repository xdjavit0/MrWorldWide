import data from './Components/NavigationBar/Mocks/Mock'
import NavigationBar from './Components/NavigationBar/index'
import { MainFrame, Title } from './styles.js'
import { useState } from 'react'
// import CardOFANew from './Components/CardOfANew/CardOfANew'
// import Data from './Components/CardOfANew/Moks/Mock'
import SelectCountryDropdown from './components/SelectCountryDropdown/SelectCountryDropdown'
import { useCountry } from './Components/ApiLocalCountryReturm/ApiCallCountry'
import NewsContainer from './Components/NewsContainer/NewsContainer'

function App () {
  const countryName = useCountry().country
  let countryCode = useCountry().country_code
  if (countryCode !== undefined) {
    countryCode = countryCode.toLowerCase()
  }
  console.log(countryCode)
  const [countryState, setCountry] = useState([countryName, countryCode])
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
        <NavigationBar categories={data} />
      </header>
      <NewsContainer localCountry={countryState[1]} />
    </MainFrame>
  )
}

export default App
