import React from 'react'
import { BrowserRouter,Route } from "react-router-dom"
import './scss/App.scss'
import Home from './pages/Home' 
import Hats from './pages/Hats'
import AddItem from './pages/AddItems'
import ScrollToTop from './components/common/scrollToTop'

function App() {
  return (
        <BrowserRouter>
          <ScrollToTop>
          <Route path ="/" component={Home} exact />
          <Route path ="/Hats" component={Hats} exact />
          <Route path ="/additems" component={AddItem} exact />
          </ScrollToTop>
        </BrowserRouter>
  );
}

export default App;

