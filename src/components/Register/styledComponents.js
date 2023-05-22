import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 100vh;
  width: 100%;
`
export const Div = styled.div`
  height: 88vh;
  width: 100%;
  padding-left: 17%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Img = styled.img`
  height: 400px;
  width: 37%;
`
export const Form = styled.form`
  height: 400px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Heading = styled.h1`
  color: #334155;
  font-size: 45px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const Label = styled.label`
  color: #64748b;
  font-size: 17px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 12px;
  margin-top: ${props => props.margin}px;
`
export const Input = styled.input`
  height: 40px;
  width: 65%;
  border-radius: 5px;
  background-color: transparent;
  padding: 14px;
`
export const Select = styled.select`
  height: 45px;
  width: 65%;
  border-radius: 5px;
  background-color: transparent;
  padding: 6px;
`
export const Option = styled.option`
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`
export const Button = styled.button`
  height: 39px;
  width: 150px;
  border: none;
  border-radius: 6px;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 7px;
`
