import * as ActionTypes from './actionTypes';

export const productReducer = (state = {isLoading: true, errMess: null, products: []}, action) => {
    switch(action.type){
        case ActionTypes.PRODUCTS_LOADING : 
             return {...state, isLoading: true, errMess: null};
        case ActionTypes.PRODUCTS_FAILED :
             return {...state, isLoading: false, errMess: action.paylaod};
        case ActionTypes.ADD_PRODUCTS : 
             return {...state, isLoading: false, errMess: null, products: action.payload};
        default : 
             return state;     
    }
}