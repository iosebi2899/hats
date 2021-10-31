import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from "react-router"
const OtherItems = (props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const history = useHistory()
    return (
        <div className="other-production">
            <h3 className="indicator white">სხვა პროდუქცია</h3>
            <Carousel 
            responsive={responsive}
            className="Carousel-in-item"
            >
                {props.resource.map((item)=>{
                    return (
                        <div key={item.id} className={history.location.pathname === `/Hats/${item.id}` ? "selected category-item full" : "category-item full"} onClick={()=>history.push('/Hats/'+item.id)}>
                            <img src={item.imgSrc} alt="hat" />
                            <div key="2" className="item-article">
                                <h4>{item.name}</h4>
                                <p>{item.price}<span className="lowerfontsize"> Gel</span></p>
                            </div>
                        </div>    
                    )
                })}
            </Carousel>
        </div>
    )
}

export default OtherItems
