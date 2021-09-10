import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carouselImage1 from './../images/story1.jpg'
import carouselImage2 from './../images/story2.jpg'
import carouselImage3 from './../images/story3.jpg'

const Main = () => {
    return (
        <div className="relative">
            <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            showArrows={false}
            transitionTime={1500}
            dynamicHeight={false}
            interval={4500}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}
            className={Carousel}
            >
                <div>
                    <img src={carouselImage1} alt="story1" />
                </div>
                <div>
                    <img src={carouselImage2} alt="story2"/>
                </div>
                <div>
                    <img src={carouselImage3} alt="story3"/>
                </div>
            </Carousel>
            <h1 className="sliderTitle">ყველაზე ძერსკი ქუდები ვაფშე</h1>
        </div>
    )
}

export default Main
