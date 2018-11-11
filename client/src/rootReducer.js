import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";

import authReducer from "./components/LoginPage/reducers";

// import teamBuilderReducer from './TeamBuilder/reducers'

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    devToolsEnhancer()
  )
);

export default store;
