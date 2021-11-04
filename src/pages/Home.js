import React from 'react'
import {Featured,Categories,About, Contact} from './../components/Main'
import Header from './../components/Header'

const Home = ()=>{
    
    return(
        <>
            <Header />
            <Featured />
            <Categories />
            <About />
            <Contact />
        </>
    )
}

export default Home