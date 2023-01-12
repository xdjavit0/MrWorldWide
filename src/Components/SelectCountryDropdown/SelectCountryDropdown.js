import { useState } from 'react'
// import { Frame, PhotoOfTheNew, Data, Title, Description } from './styles.js'
import {Countries as countriesToShow} from './ListOfCountries/Countries'

const SelectCountryDropdown = ({selectedCountry = null}) => {
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState('United States');
    const handleOpen = () => {
      setOpen(!open);
    }
  
    return (
      <div>
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
        <ul className="CountriesList">
         {countriesToShow.map((country, index) => {
                return (
                  <p
                    key={index}  
                  >{country}</p>
                )
              })
}       
        </ul>
      ) : null}
        {open ? <div></div> : <div></div>}
      </div>
    )
  }
    
  


  export default SelectCountryDropdown