import { MainFrame, Title } from './styles.js'
import { useState, useEffect } from 'react'
// import CardOFANew from './Components/CardOfANew/CardOfANew'
// import Data from './Components/CardOfANew/Moks/Mock'
import SelectCountryDropdown from './Components/SelectCountryDropdown/SelectCountryDropdown'
import NewsContainer from './Components/NewsContainer/NewsContainer'

function App () {
  const [countryState, setCountry] = useState(['United States', 'us'])

  const ChangeCountry = (country) => {
    console.log(countryState)
    setCountry(countryState[0] = country[0], countryState[1] = country[1])
    console.log(countryState)
  }

  return (
    <MainFrame className='App'>
      <header className='App-header'>
        {console.log(countryState[1])}
        <SelectCountryDropdown
          onChange={ChangeCountry}
          selected={countryState}
        />
        <Title className='Title'> Mr Worldwide </Title>
      </header>

    </MainFrame>
  )
}

export default App
// <NewsContainer localCountry={countryState.code} />
