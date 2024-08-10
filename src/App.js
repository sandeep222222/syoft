import {Route, Switch, BrowserRouter} from 'react-router-dom'
import React from 'react'

import SignUp from "./components/signup"
import SignIn from './components/signin'
import Dashboard from"./components/dashboard"
import "./App.css"

const App = ()=> {
return(
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
      </BrowserRouter>  

)
}

export default App;