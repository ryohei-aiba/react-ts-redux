import Axios from "axios";
import { Action } from "redux";
import { LOGIN, LOGOUT, INCREMENT, DECREMENT } from './ActionTypes'


export const logInAction = (userState: { name: string; isLoggedIn: boolean; }) =>{
  return{
    type: "LOGIN" as typeof LOGIN,
    payload: {
      name: userState.name,
      isLoggedIn: userState.isLoggedIn
    }
  }
};

export const logOutAction = () => {
  return{
    type: "LOGOUT" as typeof LOGOUT
  }
}


export const increment = () => {
  return{
    type: "INCREMENT" as typeof INCREMENT
  }
}

export const decrement = () => {
  return{
    type: "DECREMENT" as typeof DECREMENT
  }
}