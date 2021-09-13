import React from "react"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const routerIndicator = (params) => {
    const list = params.list
    return (
        list.map((i)=>{
            return (
                <p><a href={i.route}>{i.name}</a><ArrowBackIosIcon/></p>
            )
        })
    )
}

export default routerIndicator
