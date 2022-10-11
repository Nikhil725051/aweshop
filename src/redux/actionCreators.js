import * as ActionTypes from './actionTypes';
import { db, auth } from '../firebase';
import {doc, setDoc, getDocs, collection, getDoc} from "firebase/firestore";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';




//Most of the time UI does not use action directly
//(becuase most of the apps fetches data from server),
 //UI use thunk and thunk in turn dispatches actions
 //to reducers. Reducer return state and store get updated.
 // For example, login button when clicked dispatches
 // thunk and thunk will mmunicate with server and 
 //the after retriving the user dispatches loginSucces 
 //action to reducer and store gets updated. 


 export const signUpUser = (user) => async (dispatch) => {
       createUserWithEmailAndPassword(auth, user.email, user.password)
       .then(async (userCred) => {
        await setDoc(doc(db, 'users', userCred.user.uid), user);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loginSuccess(user));
       })
      .catch((err) => {
        dispatch(loginFailed(err.message))
      })
 }

export const logInUser = (cred) => (dispatch) => {
    dispatch(loginRequest());
    //Network call to get user details
    signInWithEmailAndPassword(auth, cred.email, cred.password)
    .then(async(userCred) => {
        const docSnapshot =  await getDoc(doc(db, 'users', userCred.user.uid));
        localStorage.setItem('user', JSON.stringify(docSnapshot.data()));
         //Dispatch related action to update the state
         dispatch(loginSuccess(docSnapshot.data()));
    })
    .catch((err) => {
        console.log(err.message);
        dispatch(loginFailed(err.message));
    })
   
    
}


export const loginRequest = () => ({
    type: ActionTypes.LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user
});

export const loginFailed = (errMess) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: errMess
});


export const addToCart = (product) => (dispatch) => {
    dispatch(cartLoading());

    //Store cart products to local storage
    var cartProducts=[];
    if(localStorage.getItem('cart')!=null){
        cartProducts = JSON.parse(localStorage.getItem('cart'));
        cartProducts.push(product);
        localStorage.setItem('cart', JSON.stringify(cartProducts));
    }else{
        cartProducts.push(product);
        localStorage.setItem('cart',JSON.stringify(cartProducts));
    }
    //Dispatch related action to update the state
    dispatch(updateCart(cartProducts));
    
}

export const removeFromCart = (productIndex) => (dispatch) => {
    dispatch(cartLoading());

    //Update cart in the local storage
    var cartProducts=[];
    cartProducts = JSON.parse(localStorage.getItem('cart'));
    cartProducts.splice(productIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    //Dispatch related actions to update the state
    dispatch(updateCart(cartProducts));
}

export const cartLoading = () => ({
    type: ActionTypes.CART_LOADING
});

export const cartFailed = (errMess) => ({
    type: ActionTypes.CART_FAILED,
    payLoad: errMess
});

export const updateCart = (cartProducts) => ({
    type: ActionTypes.UPDATE_CART,
    payLoad: cartProducts
});

export const logOutUser = () => (dispatch) => {
    dispatch(logOutRequest());
    //Sign the user out and clear user from local storage
    signOut(auth)
    .then(() => {
        localStorage.removeItem('user');
        //Dispatch related action to update the state
        dispatch(logOutSuccess());
    })
    .catch((err) => dispatch(logOutFailed(err.message)));
    
}

export const logOutRequest = () => ({
    type: ActionTypes.LOGOUT_REQUEST
});

export const logOutSuccess = () => ({
    type: ActionTypes.LOGOUT_SUCCESS
});
export const logOutFailed = (errMess) => ({
    type: ActionTypes.LOGOUT_FAILED,
    payload: errMess
})


export const fetchProducts = () => async (dispatch) => {
    dispatch(productsLoading());
    //Network call to fetch products
    const snapshot = await getDocs(collection(db, "products"));
    let products = [];
    snapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        products.push({id, ...data});
        
    })
     //Dispatch related action to update the state
    dispatch(addProducts(products));
}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errMess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errMess
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});

