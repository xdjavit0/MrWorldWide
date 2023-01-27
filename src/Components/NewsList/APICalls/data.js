import axios from 'axios'
import { useState, useEffect } from 'react'
const url = 'http://api.mediastack.com/v1/news?access_key=115b3dca9740bd61d350f3a86e9e58b5'

// Note About Api Call
// CategorybaseRequest = url + '&categories=' + CategoryName
// CountrybaseRequest = url + '&countries=' + CountryName
// CountryAndCategoryRequest = url + '&countries='+ CountryName '&categories=' + CategoryName

export const Cards = ({ localCountry = null, category = null }) => {
  const [cardsToList, setCardsToList] = useState([])
  const newUrl = checkNewUrl(localCountry, category)

  useEffect(() => {
    axios.get(newUrl).then((response) => {
      setCardsToList(response.data.data)
    })
  }, [newUrl])
  return (cardsToList)
}

const checkNewUrl = (localCountry, category) => {
  let newUrl = url
  if (localCountry !== null && localCountry !== undefined) {
    newUrl += '&countries=' + localCountry
  }
  if (category !== null && category !== undefined) {
    newUrl += '&categories=' + category
  }
  return newUrl
}
