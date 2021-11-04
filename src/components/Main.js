import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Categorie from './Categorie'
import Logo from "./../images/logo.svg"
import instaLogo from "./../images/instaicon.png"
import premiumLeatherHat from './../items/hats/img/premium-leather-khaki.jpg'

const categories = [
    {id:1, route:"Hats", name:"ქუდები", imgSrc:premiumLeatherHat,instore:true},
    {id:2, name:"მალე სხვა კატეგორიებიც", instore:false },
]


export const Featured = () => {

    return (
        <div id="featured" className="relative header">
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className="sliderTitle">Hats.ge</h1>
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
                                <p style={{cursor:"default", margin:0}}>{e.name}</p>
                            </div>
                        )
                    }
                })}
            </div>
            
            <div className="title">პროდუქცია</div>
        </div>
    )
}

export const About = () =>{
    return(
        <div id="about" className="relative about">
            <div className="title">ჩვენ შესახებ</div>
            <p><span className="med">Hats.ge</span> არის ონლაინ სივრცე, სადაც შეძლებთ ქუდების დათვალიერებასა და შეძენას. ჩვენი ნიშა არის ის, რომ გვაქვს ქუდები, როგორსაც სხვაგან ვერ იპოვით. ყველაზე ტრენდული და ახალი მოდელები. საქმიანობა ჯერ მხოლოდ სექტემბრიდან დავიწყეთ, თუმცა ელვის სისწრაფით ვვითარდებით. გვსურს მაქსიმალურად გაგიმარტივოთ ქუდის შერჩევის და ყიდვის პროცესი. მომხმარებელის ინტერესის მაქსიმალურად გათვალისწინებამ მოგვცა ის შედეგი, რაც დღეს გვაქვს.</p>
        </div>
    )
}

export const Contact = () => {
    
    return (
        <div id="categories" className="relative contact">
            <div className="contact-left">
                კონტაქტი
            </div>
            <div className="contact-right">
                <a className="mainLogo" href="https://www.instagram.com/hats.ge/" target="_blank" rel="noreferrer"><img src={instaLogo} alt="logo" /><p>ceohats.ge@gmail.com</p></a>
                <a className="mainLogo" href="https://www.instagram.com/hats.ge/" target="_blank" rel="noreferrer"><img src={instaLogo} alt="logo" /><p>Hats.ge on Instagram</p></a>
            </div>
        </div>
    )
}
