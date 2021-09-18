import React from "react"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useHistory,useParams } from "react-router";
const RouterIndicator = (params) => {
    const list = params.list
    const history =useHistory()
    const user = useParams()
    console.log(user)
    const str = history.location.pathname.replace(/\//g, "")
    return (
        list.map((i)=>{
            return (
                <p className="indicator" ><span onClick={() => history.push(i.route)}>{i.name}</span><NavigateNextIcon/>{str}</p>
            )
        })
    )
}

export default RouterIndicator
