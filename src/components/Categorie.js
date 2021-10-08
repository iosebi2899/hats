import React from "react"
import { useHistory } from "react-router"


const Categorie = (props) => {
    const history = useHistory()
    return (
        <div style={{cursor:'pointer'}} className="items inStore" onClick={() => history.push('/'+props.route)}>
            <img src={props.imgSrc} alt="Categories item" />
            <p>{props.pName}</p>
        </div>
    )
}

export default Categorie
