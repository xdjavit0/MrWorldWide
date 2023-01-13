
import { MainFrame, Title } from './styles.js'
import { useState } from 'react'
// import CardOFANew from './Components/CardOfANew/CardOfANew'
// import Data from './Components/CardOfANew/Moks/Mock'
import SelectCountryDropdown from './Components/SelectCountryDropdown/SelectCountryDropdown'

function App () {
  const [country, setCountry] = useState('United States')

  const ChangeCountry=(country)=>{
      setCountry(country)
  }
  return (
    <MainFrame className='App'>
      <header className='App-header'>
      <SelectCountryDropdown onChange={ChangeCountry}/>
      <Title className='Title'> Mr Worldwide </Title>
       
      </header> 
<p>Insert here a web page</p>
    </MainFrame>
  )
}

export default App
