import { Frame } from './styles.js'

const NewsContainer = () => {
   
    return (
      <Frame className='NewsContainer' data-testid='NewsContainer'>
        <div className='InternationalNews'>International News</div>
        <div className='LocalNews'>Local News</div>
      </Frame>
    )
  
}

export default NewsContainer