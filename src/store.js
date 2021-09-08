import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import data from "./components/product/data";
import { cartReducer } from "./reducers/CartReducers";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/ProductReducers";
const initialState = {
  cart:{
    cartItems:localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],
  }
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
