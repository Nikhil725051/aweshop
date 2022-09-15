import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/homeComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/headerComponent';
import {useDispatch} from 'react-redux'
import { useEffect} from 'react';
import { logInUser, fetchProducts } from './redux/actionCreators';
import ProductDetail from './components/productDetailComponent';
import Footer from './components/footerComponent';
import SignUp from './components/signupComponent';
import LogIn from './components/loginComponent';
import AllProducts from './components/allProductsComponent';
import AllDailyDeals from './components/allDailyDealsComponent';
import AllOfferProducts from './components/allOfferproductsComponents';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from './components/checkoutComponent';


const stripe = loadStripe("pk_test_51LeZYFSJmeHz8EXJhfzrFvRQftboC3xtZhIoQXsg4vyB2iGJPpGTsjYQLw2l72zB56gxj7nYMIO09lamL6h5odia005tr0nzRE");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
  <BrowserRouter>
   <Elements stripe={stripe}>
    <Header />
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      <Route path='/logIn' element={<LogIn></LogIn>}></Route>
      <Route path='/all' element={<AllProducts></AllProducts>}></Route>
      <Route path='/Offers' element={<AllOfferProducts></AllOfferProducts>}></Route>
      <Route path='/DailyDeals' element={<AllDailyDeals></AllDailyDeals>}></Route>
      <Route path='/checkout/:total' element={<CheckoutForm></CheckoutForm>}></Route>
    </Routes>
    <Footer />
   </Elements>
  </BrowserRouter>
  );
}

export default App;
