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
        {Object.values(countriesToShow).map((country, index) => {
          return (
            <option key={index} value={[country.name, country.code]}>
              {country.name}
            </option>
          )
        })}
      </select>
    </Frame>
  )
}

export default SelectCountryDropdown
