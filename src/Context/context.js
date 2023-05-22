import {createContext} from 'react'

const Context = createContext({
  userName: '',
  userTopic: '',
  isRegister: false,
})

export default Context
