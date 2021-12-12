import axios from 'axios'
import { Action } from 'redux'
import { ThunkAction } from "redux-thunk"
import { push } from 'connected-react-router'
import { USER_ACTION_TYPE,COUNTER_ACTION_TYPE,UserType } from './ActionTypes'
import { AppState } from './Reducers'



export const signInAction = (userState: string):UserType['action'] => {
  return {
    type: USER_ACTION_TYPE.SIGNIN,
    payload: {
      name: userState,
      isSignedIn: true
    }
  }
}

export const SignInIfFetchUser = (
  email: string,
  password: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  axios.get(`http://localhost:3000/api/user/?email=${email}\&password=${password}`)
    .then((response) => {
      dispatch(signInAction(response.data.name))
      console.log(`${email}, ${password}`, response.data.name)
      dispatch(push('/counter'))
    })
}

export const signOut = () => {
  return {
    type: USER_ACTION_TYPE.SIGNOUT,
  }
}

export function increment() {
  return {
    type: COUNTER_ACTION_TYPE.INCREMENT
  }
}

export function decrement() {
  return {
    type: COUNTER_ACTION_TYPE.DECREMENT
  }
}