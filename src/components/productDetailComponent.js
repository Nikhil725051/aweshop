import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {addToCart} from "../redux/actionCreators";
import {faShield, faBoxOpen, faTruckFast, faCreditCard, faSpinner } from "@fortawesome/free-solid-svg-icons";

function ProductDetail(){

  const [isClicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked(true);
    setTimeout(
      () => {
        dispatch(addToCart(product));
        setClicked(false);
      }, 1000)
}
    
    document.body.style.backgroundColor = "#FFFFFF";
    const {allProducts} = useSelector((state) => state);
    const {productId} = useParams();
    const product = allProducts?.products?.filter((item) => productId==item?.id)[0];
    return(<div id="product-detail">
      <div className="container mt-5">
        <div className="row">
            <div className="col-12 col-sm-6">
                <img src={product?.image} alt={product?.name} className="img-fluid"></img>
            </div>
            <div className="col-12 col-sm-6">
                <h3>{product?.name}</h3>
                <p className="product-type">{product?.type}</p>
                <div className="reviews-and-ratings">
                  <span className="text-danger"> &#9733;   </span>
                  <span>{product?.rating} | </span>
                  <span>{product?.reviews_no} reviews</span>
                </div>
                <hr className="mt-4"></hr>
                <div className="price-div">
                  <h5 className="price text-danger d-inline">&#8377;{product?.offer_price}    </h5>
                  <h6 className="d-inline"><s>&#8377;{product?.mrp}</s></h6>
                  <p className="d-inline">(You save: &#8377;{(product?.mrp-product?.offer_price)})</p>
                  <p className="text-warning">Inclusive of all taxes</p>
                  <div className="wrapper text-center my-4">
                   <button className="btn custom-btn" onClick={() => handleClick()}>
                    {isClicked ? <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon> : "ADD TO CART"}</button>
                  </div>
                </div>
                <hr className="mt-4"></hr>
                <div className="details">
                    <h6>PRODUCT DETAILS</h6>
                    <p>Display: {product?.display}
                    <br></br>
                    Movement: {product?.movement}
                    <br></br>
                    Powersource: {product?.powersource}
                    <br></br>
                    Dial Style: {product?.dialStyle}
                    <br></br>
                    Features: {product?.features}
                    <br></br>
                    Warranty: {product?.warranty}
                    </p>
                </div>
            </div>
        </div>
     </div>
     <div className="additional-detail text-center">
     <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-12 col-lg-3">
              <FontAwesomeIcon color="#FFC127" icon={faShield} size="2x"></FontAwesomeIcon>
            </div>
            <div className="col-12 col-lg-9">
              <span>1 Year Warranty</span>
            </div>
         </div>
        </div>
        <div className="col-3">
         <div className="row">
            <div className="col-12 col-lg-3">
              <FontAwesomeIcon color="#FFC127" icon={faTruckFast} size="2x"></FontAwesomeIcon>
            </div>
            <div className="col-12 col-lg-9">
              <span>Free Shipping</span>
            </div>
         </div>
      </div>
      <div className="col-3">
        <div className="row">
            <div className="col-12 col-lg-3">
              <FontAwesomeIcon color="#FFC127" icon={faBoxOpen} size="2x"></FontAwesomeIcon>
            </div>
            <div className="col-12 col-lg-9">
              <span>7 Days Replacement</span>
            </div>
         </div>
      </div>
      <div className="col-3">
       <div className="row">
            <div className="col-12 col-lg-3">
              <FontAwesomeIcon color="#FFC127" icon={faCreditCard} size="2x"></FontAwesomeIcon>
            </div>
            <div className="col-12 col-lg-9">
              <span>Secure Checkout</span>
            </div>
         </div>
       </div>
      </div>
     </div> 
    </div>
  </div>);
}

export default ProductDetail;