import React from "react"
import Logo from "./../images/logo.svg"



const Header = () => {
    return (
        <>
            <header className="main-header">
                <div className="container">
                    <div className="flex-logo">
                        <img src={Logo} alt="Logo" className="logo" />
                        <h2>Hats.ge</h2>
                    </div>
                    <nav className="main-navigation">
                        <li><a href="#featured">Featured</a></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </nav>
                    <div className="burger-menu">
                        <div className="burger"></div>  
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
