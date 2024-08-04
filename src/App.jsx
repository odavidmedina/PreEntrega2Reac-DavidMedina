import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

import CartProvider from './context/CartContex'
import CartPage from './componentes/CartPage/CartPage'
function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
