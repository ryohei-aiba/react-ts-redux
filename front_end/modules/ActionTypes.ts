import {increment, decrement } from './ActionCreater'

export type RootStateType = {
  user: UserType,
  counter: CounterType
}

export type UserType = {
  state: UserStateType,
  action: UserActionType
}

export type CounterType = {
  state: CounterStateType,
  action: CounterActionType
}

export type UserStateType = {
  name: string,
  isSignedIn: boolean
}

export type UserActionType = {
  type: keyof typeof USER_ACTION_TYPE,
  payload: UserStateType
}

export type CounterStateType = {
  number: number,
  timeStamp: Date,
  action: "increment" | "decrement" | null
}

export type CounterActionType = {
  type: keyof typeof COUNTER_ACTION_TYPE
}

export const USER_ACTION_TYPE = {
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT'  
} as const

export const COUNTER_ACTION_TYPE = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
} as const

