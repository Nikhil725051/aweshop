import * as ActionTypes from './actionTypes';



export const cartReducer = (state = {
    isLoading: false,
     errMess: null,
      products: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
     }, action) => {
    switch(action.type){
        case ActionTypes.UPDATE_CART : 
            return {...state, isLoading: false, errMess: null, products: action.payLoad};
        case ActionTypes.CART_LOADING : 
            return {...state, isLoading: true, errMess: null};
        case ActionTypes.CART_FAILED :
            return {...state, isLoading: false, errMess: action.payLoad};
        default : 
            return state;   
    }
}