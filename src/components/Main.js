import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carouselImage1 from './../images/story1.jpg'
import carouselImage2 from './../images/story2.jpg'
import carouselImage3 from './../images/story3.jpg'

const items = [
    {id:1, route:"hats", name:"Hats", imgSrc:carouselImage1,instore:true},
    {id:2, name:"Comming Soon", imgSrc:carouselImage2,instore:false},
]


export const Featured = () => {
    return (
        <div id="featured" className="relative header">
            <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            showArrows={false}
            transitionTime={1500}
            interval={4500}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}
            width={760}
            className="Carousel"
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
            <h1 className="sliderTitle">Featured<br />Items</h1>
        </div>
    )
}

export const Categories = () => {
    return (
        <div id="categories" className="relative categories">
            <div className="categories-left">
                {items.map((e)=>{
                    if(e.instore){
                        return (
                            <a className="items" href={e.route}>
                                <img src={e.imgSrc} alt="Categories item" />
                                <p>{e.name}</p>
                            </a>
                        )
                    }else{
                        return(
                            <div className="items">
                                <img src={e.imgSrc} alt="Categories item" />
                                <p style={{cursor:"default"}}>{e.name}</p>
                            </div>
                        )
                    }
                })}
            </div>
            
            <div className="title">Categories</div>
        </div>
    )
}

export const About = () =>{
    return(
        <div id="about" className="relative about">
            <div className="title">About</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis malesuada lorem, eu maximus mi semper ut. Integer maximus sodales ligula ut sollicitudin. Suspendisse potenti. Cras egestas, dolor in rutrum luctus, elit nulla faucibus lacus, et hendrerit neque ligula eget ligula. Phasellus aliquam, risus ut porta sagittis, odio lorem tristique lorem, eget malesuada urna risus ut mi. Integer tristique est id nisl ultrices egestas. Nulla consectetur dolor sed pharetra tempus.</p>
        </div>
    )
}

