import React from "react"
import Item from "./Item"
import routerIndicator from "../components/common/routerIndicator"

const Hats = () => {

    const list=[
        {route:"/",name:"Home"}
    ]

    return (
        <>
            <routerIndicator list={list} />
        </>
    )
}

export default Hats
