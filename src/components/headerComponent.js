import React, { useState } from "react";
import {Navbar,
     NavbarBrand,
     Nav,
     NavItem,
     Collapse,
     NavbarToggler} from "reactstrap";
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logOutUser} from "../redux/actionCreators";
import ShoppingCart from "./shoppingCartComponent";




function Header(){


    const {user, cartProducts} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [isCartOpen, toggleCart] = useState(false);
    

    const [isOpen, setToggle] = useState(false);
   return(
    <Navbar className="custom-navbar py-4" dark expand="lg">
       <NavbarBrand href="/">WatchStore</NavbarBrand>
       {user.isAuthenticated && <span className="text-white me-3 logged-in-user text-center">{user.user.name.charAt(0)}</span>}
       <button className="cart-btn" onClick={() => toggleCart(true)}>
         <img src="cart.png"></img>
         <span className="badge">{cartProducts?.products?.length}</span>
      </button>
       <NavbarToggler onClick={() => setToggle(!isOpen)}></NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
       <Nav navbar>
       <NavItem>
            <NavLink className="nav-link" to="/">HOME</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="nav-link" to="/all">ALL</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="nav-link" to="/offers">OFFER ZONE</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="nav-link" to="/DailyDeals">DAILY DEALS</NavLink>
        </NavItem>
        <NavItem>
            {user.isAuthenticated ? <NavLink to=' ' onClick={() => dispatch(logOutUser())} className="nav-link">SIGN OUT</NavLink> : <NavLink className="nav-link" to='/logIn'>SIGN IN</NavLink>}
        </NavItem>
       </Nav>
       <input type="search" placeholder="Search..." className="searchbar"></input>
      </Collapse>
      <ShoppingCart isCartOpen={isCartOpen} toggleCart={toggleCart}></ShoppingCart>
    </Navbar>
   );
}

export default Header;