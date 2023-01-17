import { Frame } from './styles.js'
import NewsList from '../NewsList/NewsList.js'

const NewsContainer = (localCountry = null) => {
  return (
    <Frame className='NewsContainer' data-testid='NewsContainer'>
      <NewsList isInternational className='InternationalNews' />
      <NewsList localCountry={localCountry} className='LocalNews' />
    </Frame>
  )
}

export default NewsContainer
