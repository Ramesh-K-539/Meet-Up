import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'

import Context from '../../Context/context'

import {
  HomeContainer,
  Div,
  Heading,
  Paragraph,
  Button,
  Img,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {userName, userTopic, isRegister} = value
          console.log(isRegister, userName, userTopic)
          const h = isRegister ? `Hello ${userName}` : 'Welcome to Meetup'
          const p = isRegister
            ? `Welcome to ${userTopic}`
            : 'Please register for the topic'

          return (
            <HomeContainer>
              <Header />
              <Div>
                <Heading color={isRegister ? '#2563eb' : '#334155'} size="50">
                  {h}
                </Heading>
                <Paragraph
                  color="#7b8794"
                  size={isRegister ? '38' : '24'}
                  bold="400"
                >
                  {p}
                </Paragraph>
                {!isRegister && (
                  <Link to="/register">
                    <Button type="button" onClick={this.onRegister}>
                      Register
                    </Button>
                  </Link>
                )}
                <Img
                  height="330"
                  width="740"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </Div>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
