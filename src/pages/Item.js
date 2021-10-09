import React, { useState } from "react"
import hatsList from "../items/hats/hatsList"
import { useHistory, useParams } from "react-router"
import ItemImgContainer from "../components/common/ItemContainer.js"
import OtherItems from "../components/OtherItems"

const Item = () => {
    const history = useHistory()
    const {id} = useParams()
    window.scrollTo(0,0)
    // const [itemImg, setItmImg] = useState()
    // const imageSrc = hatsList[id].itemImg
    return (
        <>
            <button onClick={() => history.push('/Hats', { scroll:"content"})} value="უკან"/>
            <div className="item-flex">
                <ItemImgContainer src={hatsList[id].imgSrc} />
                <div className="item-description">
                    <h1>{hatsList[id].name}</h1>
                    <h2>{hatsList[id].size}</h2>
                    <h3>{hatsList[id].price}Gel</h3>
                </div>
            </div>
            <OtherItems resource={hatsList} />
        </>
    )
}

export default Item
