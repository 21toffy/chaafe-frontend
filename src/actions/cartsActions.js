import axios from "axios";
import {
    CART_ADD_ITEM
    , CART_REMOVE_ITEM
    

} from "../constants/cartsConstants";


export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload:{
          name:data.name,
          image:data.image,
          countInStock: data.countInStock,
          price:data.price,
          product:data._id,
          qty
      }
    });
   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  };


  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };