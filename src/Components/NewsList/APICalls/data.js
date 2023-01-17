import axios from 'axios'
import { useState, useEffect } from 'react'
const url = 'http://api.mediastack.com/v1/news?access_key=9f44021f602fa7dbdd217ffaed2b519f'

export const Cards = () => {
  const [cardsToList, setCardsToList] = useState([])
  useEffect(() => {
    axios.get(url).then((response) => {
      setCardsToList(response.data.data)
    })
  }, [])
  return (cardsToList)
}
