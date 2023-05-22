import {Component} from 'react'

// import {Redirect} from 'react-router-dom'

import Header from '../Header'

import Context from '../../Context/context'

import {
  RegisterContainer,
  Div,
  Container,
  Img,
  Form,
  Heading,
  Label,
  Input,
  Select,
  Option,
  Button,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    name: '',
    topic: '',
    topicId: '',
    isRegister: false,
    errorMsg: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopics = event => {
    const id = event.target.value
    const filteredValue = topicsList.filter(each => each.id === id)[0]

    this.setState({topic: filteredValue.displayText, topicId: id})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name} = this.state
    const {history} = this.props

    if (name !== '') {
      this.setState({isRegister: true})
      history.replace('/')
    } else {
      this.setState({errorMsg: true})
    }
  }

  render() {
    const {name, topic, isRegister, errorMsg, topicId} = this.state
    console.log(topic)

    return (
      <Context.Provider value={{userName: name, userTopic: topic, isRegister}}>
        <RegisterContainer height="100vh" width="100">
          <Header />
          <Div>
            <Container>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={this.onSubmitForm}>
                <Heading>Let us join</Heading>
                <Label margin="0" htmlFor="Name">
                  NAME
                </Label>
                <Input
                  id="Name"
                  type="text"
                  placeholder="Your name"
                  onChange={this.onChangeName}
                  value={name}
                />
                <Label margin="35" htmlFor="Topics">
                  TOPICS
                </Label>
                <Select
                  id="Topics"
                  value={topicId}
                  onChange={this.onChangeTopics}
                >
                  {topicsList.map(each => (
                    <Option key={each.id} value={each.id}>
                      {each.displayText}
                    </Option>
                  ))}
                </Select>
                <Button type="submit">Register Now</Button>
                {errorMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
              </Form>
            </Container>
          </Div>
        </RegisterContainer>
      </Context.Provider>
    )
  }
}

export default Register
