import React  from "react"
import hatsList from "../items/hats/hatsList"
import RouterIndicator from "../components/common/routerIndicator"

const Hats = () => {

    const list=[
        {route:"hats-deploy/#categories",name:"Categories"}
    ]



    return (
        <>
            <RouterIndicator list={list} />
            <div className="category-content">
                {hatsList.map((item)=>{
                    return (
                        <div className="category-item">
                            <img src={item.imgSrc} alt="hat" />
                            <div className="item-article">
                                <h4>{item.name}</h4>
                                <p>{item.price}<span className="lowerfontsize"> Gel</span></p>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </>
    )
}

export default Hats
