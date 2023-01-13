import { Frame } from './styles.js'
import { Countries as countriesToShow } from './ListOfCountries/Countries'

const SelectCountryDropdown = ({ onChange = null, selected = null }) => {
  const setCountry = (country) => {
    if (onChange != null) {
      onChange(country)
    }
  }
  return (
    <Frame>
      <select
        name='Country'
        id='countrySelectorDropdown'
        value={selected}
        onChange={(event) => {
          setCountry(event.target.value)
        }}
      >
        {countriesToShow.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          )
        })}
      </select>
    </Frame>
  )
}

export default SelectCountryDropdown
