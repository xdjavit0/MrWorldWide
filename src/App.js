import { MainFrame, Title } from './styles.js'
import { useState } from 'react'
// import CardOFANew from './Components/CardOfANew/CardOfANew'
// import Data from './Components/CardOfANew/Moks/Mock'
import SelectCountryDropdown from './components/SelectCountryDropdown/SelectCountryDropdown'
import NewsContainer from './components/NewsContainer/NewsContainer'

function App () {
  const [countryState, setCountry] = useState(['United States', 'us'])

  const ChangeCountry = (country) => {
    setCountry(countryState[0] = country[0], countryState[1] = country[1])
    console.log(countryState)
  }
  return (
    <MainFrame className='App'>
      <header className='App-header'>
        <SelectCountryDropdown
          onChange={ChangeCountry}
          selected={countryState[0]}
        />
        <Title className='Title'> Mr Worldwide </Title>
      </header>
      <NewsContainer localCountry={countryState.code} />
    </MainFrame>
  )
}

export default App
