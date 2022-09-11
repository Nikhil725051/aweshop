import * as ActionTypes from './actionTypes'

export const userReducer = (state={
    isLoading: false,
    errMEss: null,
    isAuthenticated: localStorage.getItem('user') ? true : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null}, action) => {
    switch(action.type){
        case ActionTypes.LOGIN_REQUEST :
            return state;
        case ActionTypes.LOGIN_FAILED :
            return {...state, isLoading: false, errMess: action.payload, isAuthenticated: false, user: null};
        case ActionTypes.LOGIN_SUCCESS :
            return {...state, isLoading: false, errMess: null, isAuthenticated: true, user: action.payload};
        case ActionTypes.LOGOUT_REQUEST : 
            return {...state, isLoading: true, errMess: null};
        case ActionTypes.LOGOUT_FAILED : 
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.LOGOUT_SUCCESS : 
            return {...state, isLoading: false, errMess: null, isAuthenticated: false, user: null};
        default : 
            return state;
    }
} 