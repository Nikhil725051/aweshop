import {legacy_createStore as createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk";
import { cartReducer } from "./cart";
import { userReducer } from "./user";
import { productReducer } from "./products";

export const store = createStore(
    combineReducers({
        cartProducts : cartReducer,
        user : userReducer,
        allProducts : productReducer
    }),
    applyMiddleware(thunk)

);