import axios from 'axios';
import { useState,useEffect } from 'react';
const url ='http://api.mediastack.com/v1/news?access_key=14844e60fc53ac47b9085093167a7f4f'

export const Cards = () => {
    const [cardsToList, setCardsToList] = useState([])
     useEffect(() => {
      axios.get(url).then((response) => {
        setCardsToList(response.data.data);
      });
    }, []);
    return ( cardsToList )
  }