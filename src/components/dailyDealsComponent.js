import React from "react";
import Offer from "./offerComponent";
import {Link} from "react-router-dom";

function DailyDeals(){
    return (
        <div className="container offer mt-5">
        <div className="text-center mb-5">
         <h1 className="text-white mb-3">DAILY DEALS</h1>
         <Link className="btn btn-warning px-5" to={"/DailyDeals"}>View All</Link>
        </div>
      <Offer></Offer>
     </div>
    );
}

export default DailyDeals;