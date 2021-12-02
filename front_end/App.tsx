import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Switch, Route } from 'react-router-dom'
import { History } from 'history'

import SignIn from "./containers/Signin"

type AppProps = {
  history: History;
}

const App = ({history}: AppProps) => {
  return(  
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/signin' component={SignIn} />
        <p>Hello,world</p>
      </Switch>
    </ConnectedRouter>
  )
}

export default App;