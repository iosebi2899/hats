import React, { useState,useEffect } from "react"
import hatsList from "../items/hats/hatsList"
import { useHistory, useParams } from "react-router"
import ItemImgContainer from "../components/common/ItemContainer.js"
import OtherItems from "../components/OtherItems"
import instaLogo from "../images/instaicon.png"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from "@material-ui/core"

const scrollToTop = () =>{
    window.scrollTo(0,0)
}

const useStyle = makeStyles({
    button:{
        fontSize: 50,
    },
})

const Item = () => {
    const [color,setColor] = useState('default')
    const classes = useStyle()
    const history = useHistory()

    const {id} = useParams()

    useEffect(()=>{
        scrollToTop()
        setColor('default')
    }, [history.location.pathname])
    // const [itemImg, setItmImg] = useState()
    // const imageSrc = hatsList[id].itemImg
    return (
        <>
            <button className="ukan" onClick={() => history.push('/Hats', { scroll:"content"})} value="უკან"><NavigateBeforeIcon className={classes.button}/><span>უკან</span></button>
            <div className="item-flex">
                <ItemImgContainer 
                    src={color === "black" ? hatsList[id].blackImgSrc 
                        : color === 'white' ? hatsList[id].WhiteImgSrc 
                        : hatsList[id].imgSrc} />
                        
                <div className="item-description">
                    <h1>{hatsList[id].name}</h1>
                    <h2>{hatsList[id].size}</h2>
                    <div className='colorPicker'>
                        {id === '1' && (
                        <>
                            <h2>ფერი:</h2>
                            <button 
                                className={color === 'default' ? 'active red':'red'}
                                onClick={() => { setColor('default') } 
                            }></button>
                            <button 
                                className={color === 'black' ? 'active black':'black'}
                                onClick={() => { setColor('black') }
                            }></button>
                            
                        </>)}
                        {id === '2' && (
                        <>
                            <h2>ფერი:</h2>
                            <button 
                                className={color === 'default' ? 'active begie':'begie'}
                                onClick={() => { setColor('default') } 
                            }></button>
                            <button 
                                className={color === 'white' ? 'active whitebtn':'whitebtn'}
                                onClick={() => { setColor('white') }
                            }></button>
                            <button 
                                className={color === 'black' ? 'active black':'black'}
                                onClick={() => { setColor('black') }
                            }></button>
                        </>)}
                        {id === '3' && (
                        <>
                            <h2>ფერი:</h2>
                            <button 
                                className={color === 'default' ? 'active khaki':'khaki'}
                                onClick={() => { setColor('default') } 
                            }></button>
                            <button 
                                className={color === 'white' ? 'active whitebtn':'whitebtn'}
                                onClick={() => { setColor('white') }
                            }></button>
                            
                        </>)}
                    </div>
                    <div className="instaIcon">
                        <h3>{hatsList[id].price}Gel</h3>
                        <a href="https://www.instagram.com/hats.ge/" target="_blank" rel="noreferrer"><img src={instaLogo} alt="logo" /></a>
                    </div>
                </div>
            </div>
            <OtherItems autoplat={true} resource={hatsList} />
        </>
    )
}

export default Item
