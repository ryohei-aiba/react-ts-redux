import { logInAction, logOutAction, increment, decrement } from './ActionCreater'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export type Action = ReturnType<typeof logInAction | typeof logOutAction | typeof increment  | typeof decrement>
