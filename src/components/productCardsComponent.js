import React, { useState } from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/actionCreators";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";



const ProductCard = ({product}) => {

    const [isClicked, setClicked] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {setClicked(false);}, 1000)
        dispatch(addToCart(product));

    }

    return(
        <div className="col-12 col-sm-6 col-lg-3 product mb-4">
             <Link to={`/product/${product.id}`}><img src={product.image} className="img-fluid"></img></Link>
              <div className="product-description">
                <h5 className="product-title ms-3">{product.name}</h5>
                <div className="reviews-and-ratings ms-3">
                  <span className="text-danger"> &#9733;   </span>
                  <span>{product.rating} | </span>
                  <span>{product.reviews_no} reviews</span>
                </div>
                <div className="price-div ms-3">
                  <hr className="me-3"/>
                  <h5 className="price text-danger d-inline">${product.offer_price}    </h5>
                  <h5 className="d-inline"><s>${product.mrp}</s></h5>
                  <p>save: ${(product.mrp-product.offer_price)}</p>
                </div>

                <div className="wrapper text-center">
                 <button className="btn custom-btn mb-4" onClick={() => {handleClick()}}>
                 {isClicked ? <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon> : "ADD TO CART"}</button>
                </div>
                
              </div>
            </div>);
}

export default ProductCard;