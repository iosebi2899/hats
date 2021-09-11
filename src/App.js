import React from 'react'
import './scss/App.scss'
import Header from './components/Header'
import {Featured,Categories,About} from './components/Main'


function App() {
  return (
    <>
         <Header />
         <Featured />
         <Categories />
         <About />
    </>
  );
}

export default App;

