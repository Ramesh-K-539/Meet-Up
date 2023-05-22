import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 80px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 110px;
  padding-left: 110px;
`
export const Img = styled.img`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
