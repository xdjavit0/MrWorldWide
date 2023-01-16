import { Frame } from './styles.js'
import NewsList from '../NewsList/NewsList.js'

const NewsContainer = () => {
   
    return (
      <Frame className='NewsContainer' data-testid='NewsContainer'>
        <NewsList className='InternationalNews'></NewsList>
        <NewsList className='LocalNews'></NewsList>
      </Frame>
    )
  
}

export default NewsContainer