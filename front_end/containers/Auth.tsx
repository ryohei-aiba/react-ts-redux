import * as React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from "react-router-dom";


type AuthRouteProps = {
  isSignedIn: boolean
  pathname: string
}

const AuthRoute: React.FC<AuthRouteProps> = props => {
  return(
    <Route exact path={props.pathname}>
      {props.isSignedIn ? props.children : <Redirect to='/signin' />}
    </Route>
  )
}

const mapStateToProps = (state: any) => ({
  isSignedIn: state.user.isSignedIn,
  pathname: state.router.location.pathname
})

export default connect(mapStateToProps, null)(AuthRoute)