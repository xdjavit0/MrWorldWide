import { MainFrame, Title } from "./styles.js";
import { useState } from "react";
// import CardOFANew from './Components/CardOfANew/CardOfANew'
// import Data from './Components/CardOfANew/Moks/Mock'
import SelectCountryDropdown from "./Components/SelectCountryDropdown/SelectCountryDropdown";
import NewsContainer from "./Components/NewsContainer/NewsContainer";

function App() {
  const [countryState, setCountry] = useState("United States")

  const ChangeCountry = (country) => {
    setCountry(country);
  }
  return (
    <MainFrame className="App">
      <header className="App-header">
        <SelectCountryDropdown
          onChange={ChangeCountry}
          selected={countryState}
        />
        <Title className="Title"> Mr Worldwide </Title>
      </header>
      <NewsContainer localCountry={countryState}/>
    </MainFrame>
  )
}

export default App
