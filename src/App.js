import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Homepage, NavBar, Checkout, ProductPage, SearchResult} from './components'

const App = () => {
  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
    <Route exact path="/" element={<Homepage />}/>
    <Route path="/search" element={<SearchResult />}/>
    <Route path="/product/:id" element={<ProductPage />}/>
    <Route path="/checkout" element={<Checkout />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App