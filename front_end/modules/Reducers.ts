import { UserType,CounterType } from './ActionTypes'
import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

const initialState = {
  userState: {
    name: '',
    isSignedIn: false
  },
  counterState: [
    {
      number: 0,
      timeStamp: new Date,
      action: null as any
    }
  ]
}


export function userReducer(state = initialState.userState, action: UserType['action']): UserType["state"]{
  switch(action.type) {
    case "SIGNIN":
      return {
        ...state,
        ...action.payload
      }
    case "SIGNOUT":
      return {
        ...initialState.userState
      }
    default:
      return state;
  }
}


export function counterReducer(state = initialState.counterState, action: CounterType['action']): Array<CounterType['state']>{
  switch(action.type) {
    case "INCREMENT":
      return [...state, {
        number: state[state.length - 1].number += 1,
        timeStamp: new Date,
        action: 'increment'
      }]
    case "DECREMENT":
      return [...state, {
        number: state[state.length - 1].number -= 1,
        timeStamp: new Date,
        action: 'decrement'
      }]
    default:
      return state
  }
}

export const rootReducer = (history: History) => combineReducers({
  user: userReducer,
  counter: counterReducer,
  router: connectRouter(history)
})

export type AppState = ReturnType<typeof rootReducer>
