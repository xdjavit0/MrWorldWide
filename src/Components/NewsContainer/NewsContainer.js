import { Frame } from './styles.js'
import NewsList from '../NewsList/NewsList.js'

const NewsContainer = (localCountry = null) => {
   
    return (
      <Frame className='NewsContainer' data-testid='NewsContainer'>
        <NewsList isInternational= {true} className='InternationalNews'></NewsList>
        <NewsList localCountry={localCountry} className='LocalNews'></NewsList>
      </Frame>
    )
  
}

export default NewsContainer