
import { Frame } from './styles.js'
import CardOfANew from '../CardOfANew/CardOfANew'
// import data from './Mocks/DataMocks.js'
import { Cards as GetCards } from './APICalls/data'
const NewsList = ({ isInternational = false, localCountry = null, category = null }) => {
  const newsToList = GetCards()
  return (
    <Frame className='NewsList' data-testid='NewsList'>
      {newsToList != null
        ? (
            newsToList.map((card, index) => {
              return (

                <CardOfANew key={index} id={index} title={card.title} description={card.description} photo={card.image} url={card.url} />
              )
            })
          )
        : (<></>)}
    </Frame>
  )
}

export default NewsList
