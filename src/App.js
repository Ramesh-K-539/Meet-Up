import './App.css'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import Register from './components/Register'

import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route component={NotFound} />
  </Switch>
)

export default App
