import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Categorie from './Categorie'
import { Carousel } from 'react-responsive-carousel';
const categories = [
    {id:1, route:"Hats", name:"ქუდები", imgSrc:'https://i.imgur.com/PtWR44c.jpg',instore:true},
    {id:2, name:"მალე სხვა კატეგორიებიც", instore:false },
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
                    <img src='https://i.imgur.com/DSkhzLD.jpg' alt="story1" />
                </div>
                <div>
                    <img src='https://i.imgur.com/TzTQndC.jpg' alt="story2"/>
                </div>
                <div>
                    <img src='https://i.imgur.com/PtWR44c.jpg' alt="story3"/>
                </div>
            </Carousel>
            <h1 className="sliderTitle">Gallery</h1>
        </div>
    )
}

export const Categories = () => {
    
    return (
        <div id="categories" className="relative categories">
            <div className="categories-left">
                {categories.map((e)=>{
                    if(e.instore){
                        return (
                            <Categorie route={e.route} imgSrc={e.imgSrc} alt="Categories item" pName={e.name} />
                        )
                    }else{
                        return(
                            <div className="items">
                                <img src={e.imgSrc} alt="" />
                                <p style={{cursor:"default"}}>{e.name}</p>
                            </div>
                        )
                    }
                })}
            </div>
            
            <div className="title">კატეგორიები</div>
        </div>
    )
}

export const About = () =>{
    return(
        <div id="about" className="relative about">
            <div className="title">ჩვენს შესახებ</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis malesuada lorem, eu maximus mi semper ut. Integer maximus sodales ligula ut sollicitudin. Suspendisse potenti. Cras egestas, dolor in rutrum luctus, elit nulla faucibus lacus, et hendrerit neque ligula eget ligula. Phasellus aliquam, risus ut porta sagittis, odio lorem tristique lorem, eget malesuada urna risus ut mi. Integer tristique est id nisl ultrices egestas. Nulla consectetur dolor sed pharetra tempus.</p>
        </div>
    )
}

