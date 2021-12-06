import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Switch, Route } from 'react-router-dom'
import { History } from 'history'
import SignIn from "./containers/Signin"
import Count from "./containers/counter/counterbox/CountBox"
import HistoryList from "./containers/counter/History";
import AuthRoute from "./containers/Auth"

type AppProps = {
  history: History;
}

const App = ({history}: AppProps) => {
  return(  
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/signin' component={SignIn} />
        
          <Route exact path='/counter' component={Count} />
          <Route exact path='/history' component={HistoryList} />
          
      </Switch>
    </ConnectedRouter>
  )
}

export default App;