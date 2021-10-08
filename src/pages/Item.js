import React from "react"
import hatsList from "../items/hats/hatsList"
import { useParams } from "react-router"

const Item = () => {
    const {id} = useParams()
    

    return (
        <div>
            {hatsList[id].name}
        </div>
    )
}

export default Item
