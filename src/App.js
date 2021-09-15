import React from 'react'
import { BrowserRouter,Route } from "react-router-dom"
import './scss/App.scss'
import Home from './pages/Home' 
import Hats from './pages/Hats'


function App() {
  return (
        <BrowserRouter>
          <Route path ="/hats" component={Home} exact />
          <Route path ="/items" component={Hats} exact />
        </BrowserRouter>
  );
}

export default App;

