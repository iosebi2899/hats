import React from "react"


const Header = () => {
    return (
        <>
            <header className="main-header">
                <div className="container">
                    <h2>Hats.ge</h2>
                    <nav className="main-navigation">
                        <li><a href="#header">home</a></li>
                        <li><a href="#portofolio">Featured</a></li>
                        <li><a href="#our-team">Categories</a></li>
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
