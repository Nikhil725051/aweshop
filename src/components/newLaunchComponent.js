import React, {useState} from "react";
import {Carousel, CarouselItem} from "reactstrap";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {addToCart} from "../redux/actionCreators";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

function NewLaunch(){

    const {allProducts, cartProducts} = useSelector((state) => state);
    const dispatch = useDispatch();

    var carouselItems = allProducts.products.map((item)=>{
        return(
            <CarouselItem>
               <div className="row ">
                <div className="col-12 col-md-6 p-0">
                    <img src={item.image} className="img-fluid"></img>
                </div>
                <div className="col-12 col-md-6 text-center description">
                    <h6 className="mt-4">Luxury Watches</h6>
                    <h3 className="mx-3 mt-3 text-truncate">{item.name}</h3>
                    <h5 className="mt-3">Launch Price</h5>
                    <h4 className="text-danger mt-2">${item.mrp}</h4>
                    <h5 className="bg-secondary mt-2">DESCRIPTION</h5>
                    <p className="ps-4 pe-2 mt-3 text-start">{item.description}
                    <a className="read-more" href="#">...Read more</a>
                    </p>
                   <div className="mb-3 action-btn mx-4">
                   <Link to={`/product/${item?.id}`} className="btn bg-warning p-2 w-100">EXPLORE MORE</Link>
                    <button className="btn btn-danger w-100" onClick={() => dispatch(addToCart(item))}>
                        {cartProducts.isLoading ? <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon> : "ADD TO CART"}
                    </button>
                   </div>
                </div>
               </div>
            </CarouselItem>
        );
      })
      

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () =>{
        const nextIndex = activeIndex === allProducts.products.length-1 ? 0 : activeIndex+1;
        setActiveIndex(nextIndex);
    }
    
    const prev = () => {
        const prevIndex = activeIndex === 0 ? allProducts.products.length-1 : activeIndex-1;
        setActiveIndex(prevIndex);
    }



    return(<div className="container newLaunch">
        <h1 className="text-center text-white my-5">NEW LAUNCHES</h1>
         <Carousel activeIndex={activeIndex} next={next} previous={prev}>
            {carouselItems}
        </Carousel>
    </div>);
    
}


export default NewLaunch;