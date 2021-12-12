import * as React from 'react';
import { connect } from 'react-redux'
import { SignInIfFetchUser } from '../modules/ActionCreater'


type SignInProps = {
  SignInIfFetchUser: typeof SignInIfFetchUser
}
class SignIn extends React.Component<SignInProps> {
  render(){
    let email: any
    let password: any

    return(
      <div>
        <h1>Sign In</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.SignInIfFetchUser(email.value, password.value)
        }}>
          <input type='text' ref={ node => {email = node} }/>
          <input type='password' ref={ node => {password = node} }/>
          <button type='submit'>ログイン</button>
        </form>
      </div>
    )
  }
}

export default connect(null,{ SignInIfFetchUser })(SignIn)