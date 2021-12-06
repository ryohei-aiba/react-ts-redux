import axios from 'axios'
import { Action } from 'redux'
import { ThunkAction } from "redux-thunk"
import { push } from 'connected-react-router'
import { LOGIN, LOGOUT, INCREMENT, DECREMENT } from './ActionTypes'
import { AppState } from './Reducers'



export const logIn = (payload: string) => {
  return {
    type: 'LOGIN' as typeof LOGIN,
    name: payload
  }
}

export const logInIfFetchUser = (
  email: string,
  password: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  axios.get(`http://localhost:8080/api/user/?email=${email}\&password=${password}`)
    .then((response) => {
      dispatch(logIn(response.data.name))
      console.log(`${email}, ${password}`, response.data)
      dispatch(push('/counter'))
    })
}

export const logOut = () => {
  return {
    type: 'LOGOUT' as typeof LOGOUT,
  }
}

export function increment() {
  return {
    type: 'INCREMENT' as  typeof INCREMENT
  }
}

export function decrement() {
  return {
    type: 'DECREMENT' as typeof DECREMENT
  }
}