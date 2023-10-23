import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import { PayPage } from '../pages/pagos'
import ReservasPage from '../pages/reservas'
import {Noticia1Page, Noticia2Page, Noticia3Page} from '../pages/noticias'



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/noticias'> 
          <Route path='1' element={<Noticia1Page />} />
          <Route path='2' element={<Noticia2Page />} />
          <Route path='3' element={<Noticia3Page />} />
        </Route>
        <Route path='/pagos' element={<PayPage />} />
        <Route path='/reservas' element={<ReservasPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter
