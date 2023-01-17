import styled from '@emotion/styled'

export const ContainerNavitem = styled.div`
    width: fit-content;
    height: 3%;
    cursor: pointer;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    color: black;
    position:sticky;
    font-size:1.5rem;
    font-family:arial;
`

export const IsSelected = styled.p`
    border-bottom: 6px solid coral;
    color: coral;
`

export const IsNotSelected = styled.p`
    color: black;
    &:hover{
        background-color: white;
    }
`
