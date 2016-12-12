import { combineReducers,createStore } from "redux";
import { routerReducer } from "react-router-redux";
//import { reducer as formReducer } from "redux-form";
import users from'./user';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer
 // search:search
  //form: formReducer,
  // your reducer here
  //users:users

});
