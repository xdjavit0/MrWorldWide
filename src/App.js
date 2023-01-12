import './App.css';
import CardOFANew from './Components/CardOfANew/CardOfANew'
import  Data  from './Components/CardOfANew/Moks/Mock';
import SelectCountryDropdown from './Components/SelectCountryDropdown/SelectCountryDropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="Title"> Mr Worldwide </h1>
      </header>
      <SelectCountryDropdown/>
    </div>
  );
}

export default App;
