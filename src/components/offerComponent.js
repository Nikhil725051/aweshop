import React from "react";
import {useSelector} from "react-redux";
import ProductCard from "./productCardsComponent";

function Offer(){
  const {allProducts} = useSelector((state) => state);


  var productCards=[];

      for(let i=0; i<8; i++){
        productCards[i] =
        (
            <ProductCard product={allProducts?.products[i]}></ProductCard>
        );
        }


    return(
      <div className="row">
      {productCards}
    </div>
    );
}


export default Offer;