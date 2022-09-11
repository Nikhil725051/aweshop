import React from "react";

import Offer from "./offerComponent";

function DailyDeals(){
    return (
        <div className="container offer mt-5">
        <div className="text-center mb-5">
         <h1 className="text-white mb-3">DAILY DEALS</h1>
         <a className="btn btn-warning px-5" href="#">View All</a>
        </div>
      <Offer></Offer>
     </div>
    );
}

export default DailyDeals;