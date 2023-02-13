// import { useState, useEffect } from 'react'
const url = 'https://ipwho.is/'

export const GetCountry = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        reject(new Error(`Error: ${response.status}`))
      }
      const data = await response.json()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

// export const GetCountry = () => {
//   const [localCountry, setLocalCountry] = useState([])
//   useEffect(() => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => setLocalCountry([data.country, data.country_code.toLowerCase()]))
//   }, [])
//   return [localCountry, setLocalCountry]
// }
// export default GetCountry
