import React from 'react'
import {Featured,Categories,About} from './../components/Main'
import Header from './../components/Header'

const Home = ()=>{
    
    return(
        <>
            <Header />
            <Featured />
            <Categories />
            <About />
        </>
    )
}

export default Home