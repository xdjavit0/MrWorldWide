import NavigationItem from '../NavigationItem/index'
import { NavigationBarContainer } from './style'
import { useState } from 'react'

const NavigationBar = props => {
  console.log(props.categories);
  const [selectedState, setSelectedState] = useState(0)
  const tabSelected = tab => {
    setSelectedState(tab)
  }

  return (
    <NavigationBarContainer className='navigationBarContainer'>
      {props.categories.map((element, i) => {
        return <NavigationItem key={i} id={i} name={element} isSelected={i === selectedState} onChange={tabSelected}/>
      })}
    </NavigationBarContainer>
  )
}
export default NavigationBar