import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
width: fit-content;
height: fit-content;
box-sizing: border-box;
background: rgba(217, 217, 217, 0.58);
border: 1px solid white;
box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
backdrop-filter: blur(6px);
text-align: center;
cursor: pointer;
transition: all 0.5s;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
font-weight: bolder;
display: flex; 
${withTheme('margin-left', 'sizes.rem02')}
${withTheme('margin-bottom', 'sizes.rem05')}
${withTheme('padding', 'sizes.rem02')}
${withTheme('background-color', 'colors.sand')}
:hover{
   
        border: 1px solid black;
        transform: scale(1.05);
      
}
:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`
export const PhotoOfTheNew = styled.img`
display: inline-block; 
margin-top:0.5rem;
float:left;
${withTheme('width', 'sizes.rem5')}
${withTheme('height', 'sizes.rem5')}
`
export const Data = styled.div`
display: inline-block;
${withTheme('margin-left', 'sizes.rem05')}
position: relative;
${withTheme('bottom', 'sizes.rem05')}
`
export const Title = styled.p`
text-align: justify;
${withTheme('font-weight', 'fontWeight.bold')}
${withTheme('font-size', 'sizes.rem09')}

`
export const Description = styled.p`
text-align: justify;
position: relative;
${withTheme('font-size', 'sizes.rem07')}
${withTheme('bottom', 'sizes.rem05')}

`
