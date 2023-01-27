import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
margin-left: auto;
margin-right: auto;
width: 100%;
${withTheme('background-color', 'colors.sand')}
display:flex;
border: 5px solid black;
`
