import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory} from "history";
import { createStore, applyMiddleware ,combineReducers } from "redux";
import { rootReducer } from "./Reducers";

export const history = createBrowserHistory()

export const store =  createStore(
  rootReducer(history),
  applyMiddleware(
    routerMiddleware(history)
  )
)
