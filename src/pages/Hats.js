import React, {useEffect}  from "react"
import hatsList from "../items/hats/hatsList"
import RouterIndicator from "../components/common/routerIndicator"
import { useHistory } from "react-router"

const Hats = (props) => {
    
    const { location } = props;
    const { state } = location || {};
    const history = useHistory()
    const {scroll} = state || {};

    useEffect(()=>{
        if(scroll==="top"){
            window.scrollTo(0,0)
        }else if(scroll==="content"){
            window.scrollTo(0,250)
        }
    },[scroll])

    const list=[
        {route:"/#categories",name:"Categories"}
    ]



    return (
        <>
            <RouterIndicator list={list} />
            <div key="" className="category-content">
                {hatsList.map((item)=>{
                    return (
                        <div key={item.id} className="category-item" onClick={()=>history.push('/Hats/'+item.id)}>
                            <img src={item.imgSrc} alt="hat" />
                            <div key="2" className="item-article">
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
