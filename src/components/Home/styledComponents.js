import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
`

export const Img = styled.img`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
export const Div = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 14px;
`
export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.bold};
  font-family: 'Roboto';
  margin-top: 0px;
`
export const Button = styled.button`
  height: 39px;
  width: 95px;
  border: none;
  border-radius: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  margin-bottom: 30px;
`
