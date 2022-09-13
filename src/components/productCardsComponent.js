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
        <div className="col-6 col-md-3 product mb-4">
             <Link to={`/product/${product.id}`}><img src={product.image} className="img-fluid"></img></Link>
              <div className="product-description">
                <h5 className="product-title ms-3">{product.name}</h5>
                <div className="reviews-and-ratings ms-3">
                  <span className="text-danger"> &#9733;   </span>
                  <span>{product.rating} | </span>
                  <span>{product.reviews_no} reviews</span>
                </div>
                <div className="price-div ms-3">
                  <hr className="me-3 my-2"/>
                  <h5 className="price fs-5 text-danger d-inline">${product.offer_price}    </h5>
                  <h5 className="d-inline fs-6"><s>${product.mrp}</s></h5>
                </div>

                <div className="wrapper text-center">
                 <button className="btn custom-btn mt-3" onClick={() => {handleClick()}}>
                 {isClicked ? <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon> : "ADD TO CART"}</button>
                </div>
                
              </div>
            </div>);
}

export default ProductCard;