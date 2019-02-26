import * as actionTypes from './actionTypes';
import Axios from 'axios';
import data  from '../data/products'

//import { stringify } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/event-stream';

//const apiUrl = 'https://firebasestorage.googleapis.com/v0/b/buyforyou-a5fdc.appspot.com/o/products.json?alt=media&token=8a6d0757-478d-4f53-b73d-1245636f7468';
const apiUrl = 'http://demo1254378.mockable.io/';


export const fetchProductSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PROD_SUCCESS,
    products
  }
};

export const fetchProducts = () => {
    return (dispatch) => {
      return Axios.get(apiUrl)
        .then(response => {
          dispatch(fetchProductSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const addToCartSuccess = (id, price, name, qty, totQty ) => {
   //console.log("add to cart")
    return {
      type: actionTypes.ADD_TO_CART_SUCCESS,
      id,
      price,
      name,
      qty,
      totQty
    }
  };

    export const deleteCartItem = (id) => {
      console.log("Delete to cart")
       return {
         type: actionTypes.DELETE_CART,
         id
       }
  };

  export const UpdateCart = (id, price, qty, totPrice ) => {
     return {
       type: actionTypes.UPDATE_CART,
       id,
       price,
       qty,
       totPrice
     }
   };