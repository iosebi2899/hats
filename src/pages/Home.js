import React from 'react'
import {Categories,About, Contact, FooterImg} from './../components/Main'
import Header from './../components/Header'

const Home = ()=>{
    
    return(
        <>
            <Header />
            <Categories />
            <About />
            <Contact />
            <FooterImg/>
        </>
    )
}

export default Home