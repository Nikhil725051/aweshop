import React from "react";



function AllOfferProducts(){
    var comingSoon=[];


    for(let i=0; i<100; i++){
        comingSoon[i] = (
            <div className="row mt-5">
             <div className="col-6 col-md-3 pb-5 pb-md-0">
                <img 
                src="https://via.placeholder.com/250x250.png/ffdde4?text=Coming+Soon" 
                className="img-fluid">
                </img>
             </div>
             <div className="col-6 col-md-3">
             <img 
                src="https://via.placeholder.com/250x250.png/ffdde4?text=Coming+Soon" 
                className="img-fluid">
                </img>
             </div>
             <div className="col-6 col-md-3">
             <img 
                src="https://via.placeholder.com/250x250.png/ffdde4?text=Coming+Soon" 
                className="img-fluid">
                </img>
            </div>
            <div className="col-6 col-md-3">
            <img 
                src="https://via.placeholder.com/250x250.png/ffdde4?text=Coming+Soon"
                className="img-fluid">
                </img>
            </div>
        </div>
          
        );
    }

    return(<div className="container">
        {comingSoon}
    </div>);
}

export default AllOfferProducts;