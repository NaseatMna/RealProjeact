import { combineReducers,createStore } from "redux";
import { routerReducer } from "react-router-redux";
//import { reducer as formReducer } from "redux-form";
import users from'./user';
import products from './product_category';
import services from './service_category';
// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  products: products,
  services:services
});
