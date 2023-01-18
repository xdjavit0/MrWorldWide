import axios from 'axios'
import { useState, useEffect } from 'react'
// const url = 'http://api.mediastack.com/v1/news?access_key=9f44021f602fa7dbdd217ffaed2b519f'
const url = 'http://api.mediastack.com/v1/news?access_key=9f44021f602fa7dbdd217ffaed2b519f'
// const Categorybase = url + '&categories='
// const Countrybase = url + '&countries='
// const CountryAndCategorybase = url + '&countries=us&categories=health'

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
