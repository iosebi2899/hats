import React from "react"

const ItemImgContainer = (props) => {
    return (
        <div className="itemImg">
            <img src={props.src} alt="item" />
        </div>
    )
}

export default ItemImgContainer
