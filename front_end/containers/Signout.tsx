import * as React from 'react';
import { connect } from 'react-redux'
import { signOut } from '../modules/ActionCreater'


type SignOutProps ={
  signOut: typeof signOut
}
const SignOut: React.FC<SignOutProps> = props => {
  return (
    <button onClick={() => props.signOut()}>ログアウト</button>
  )
}


export default connect(null, { signOut })(SignOut)


