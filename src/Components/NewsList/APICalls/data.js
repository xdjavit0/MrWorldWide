const url = 'http://api.mediastack.com/v1/news?access_key=ba368377a5f381870e4fcb854e42a8ab'

// Notes About Api Call
// CategorybaseRequest = url + '&categories=' + CategoryName
// CountrybaseRequest = url + '&countries=' + CountryName
// CountryAndCategoryRequest = url + '&countries='+ CountryName '&categories=' + CategoryName

export const GetCards = async ({ localCountry = null, category = null }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newUrl = checkNewUrl(localCountry, category)
      const response = await fetch(newUrl)
      if (!response.ok) {
        reject(new Error(`Error: ${response.status}`))
      }
      const data = await response.json()
      resolve(data.data)
    } catch (error) {
      reject(error)
    }
  })
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

//   useEffect(() => {
//     fetch(newUrl)
//       .then(response => response.json())
//       .then(data => setCardsToList(data.data))
//   }, [newUrl])
//   return (cardsToList)
// }

// useEffect(() => {
//   fetch(newUrl)
//     .then(response => response.json())
//     .then(data => setCardsToList(data.data))
// }, [newUrl])
// return (cardsToList)
// }

// export const Cards = ({ localCountry = null, category = null }) => {
//   const [cardsToList, setCardsToList] = useState([])
//   const newUrl = checkNewUrl(localCountry, category)

//   useEffect(() => {
//     axios.get(newUrl).then((response) => {
//       setCardsToList(response.data.data)
//     })
//   }, [newUrl])
//   return (cardsToList)
// }
