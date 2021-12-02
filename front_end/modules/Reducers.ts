import { Action, LOGIN, LOGOUT, INCREMENT, DECREMENT } from './ActionTypes';
import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const initialState = {
  userState: {
    name: '',
    isLoggedIn: false
  },
  counterState: [
    {
      number: 0,
      timeStamp: new Date,
      action: null as any
    }
  ]
}

type userReducerType = {
  name: string,
  isLoggedIn: boolean
}

export function userReducer(state = initialState.userState, action: Action): userReducerType {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      }
    case LOGOUT:
      return {
        ...initialState.userState
      }
    default:
      return state;
  }
}

type counterReducerType = {
  number: number,
  timeStamp: Date,
  action: 'increment' | 'decrement' | null
}

export function counterReducer(state = initialState.counterState, action: Action): Array<counterReducerType> {
  switch (action.type) {
    case INCREMENT:
      return state
    case DECREMENT:
      return state
    default:
      return state;
  }
}

export const rootReducer = (history: History) => combineReducers({
  user: userReducer,
  counter: counterReducer,
  router: connectRouter(history)
})

export type AppState = ReturnType<typeof rootReducer>