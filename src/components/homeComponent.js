import React, { useState } from "react";
import {Container,
        Carousel,
        CarouselCaption,
        CarouselControl, 
        CarouselIndicators, 
        CarouselItem} from "reactstrap";
import OfferZone from "./offerZoneComponent";
import NewLaunch from "./newLaunchComponent";
import DailyDeals from "./dailyDealsComponent";
import {useSelector} from "react-redux"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


function Home(){
    document.body.style.backgroundColor = "#012727";

    const {allProducts} = useSelector((state) => state);

    if(allProducts.isLoading){
        return(
            <div className="spinner">
              <FontAwesomeIcon icon={faSpinner} color="#FFC127" size="3x"></FontAwesomeIcon>
            </div>
          );
    }else{
        return(<div id="home">
        <Container fluid className="m-0 p-0">
          <CarouselComponent></CarouselComponent>
        </Container>
        <OfferZone></OfferZone>
        <NewLaunch></NewLaunch>
        <DailyDeals></DailyDeals>
      </div>
    
    );
    }
    
}

function CarouselComponent(props){

    const {allProducts} = useSelector((state) => state);

      var carouselItems = allProducts.products.map((item)=>{
        return(
            <CarouselItem>
                <img src={item.image} alt="name" className="img-fluid" ></img>
                <CarouselCaption captionText={item.description} captionHeader={item.name}></CarouselCaption>
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

    return(
        <Carousel activeIndex={activeIndex} next={next} previous={prev}>
            <CarouselIndicators items={allProducts.products} activeIndex={activeIndex} ></CarouselIndicators>
            {carouselItems}
            <CarouselControl direction="prev" directionText="previous" onClickHandler={prev}></CarouselControl>
            <CarouselControl direction="next" directionText="next" onClickHandler={next}></CarouselControl>
        </Carousel>
    );
    
}

export default Home;