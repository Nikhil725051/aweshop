import React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../redux/actionCreators";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";


function ShoppingCart({isCartOpen, toggleCart}){
    const {cartProducts} = useSelector((state) => state);
    const dispatch = useDispatch();

    const calculateTotal = () => {
        var total = 0;
        cartProducts?.products?.forEach(product => {
            total=total + product.offer_price;
        });
        return total;
    }

    return(
       <Modal className="cart-modal" centered isOpen={isCartOpen} scrollable={true}>
        <ModalHeader toggle={() => toggleCart(false)}>cart</ModalHeader>
        <ModalBody className="text-muted">
           {cartProducts?.products?.map((product) => {
            return (<div  className="d-flex mb-3">
                 <img src={product?.image}></img>
                 <h6>{product?.name}</h6>
                 <h6>${product?.offer_price}</h6>
                 <button 
                 className="remove-btn" 
                 onClick={() => {dispatch(removeFromCart(cartProducts?.products?.indexOf(product)))}}>
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
              </div>);
           })}
        </ModalBody>
        <ModalFooter>
            <h5 className="text-total">Total: </h5>
            <h5 className="total-price me-4">${calculateTotal()}</h5>
            <Link to="/checkout" className="checkout-btn" onClick={() => {toggleCart(false)}}>Checkout</Link>
        </ModalFooter>
       </Modal>
    );
}

export default ShoppingCart;