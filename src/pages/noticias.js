import React from 'react'

import { NavLink } from 'react-router-dom'
import NavBar from '../components/nav_bar'

export const Noticia1Page = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Comunidad de vecinos</h1>
      <NavBar />
      <NavLink className='volver' to='/'>Volver
      </NavLink>
      <h2 className='Titulo'>Aviso: ¿Problemas con la luz?</h2>
      <p className='parrafoNoticia'>Algunos vecinos nos informaron que presentan un problema con la luz de su departamento a determinadas horas del día, si también presentan el mismo inconveniente, por favor acercarse a recepción o informar a la administración para investigar el hecho.
      <br></br>
      Atte. La Administración</p>
    </div>
  )
}

export const Noticia2Page = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Comunidad de vecinos</h1>
      <NavBar />
      <NavLink className='volver' to='/'>Volver
      </NavLink>
      <h2 className='Titulo'>Aviso: Se programa corte de luz</h2>
      <p className='parrafoNoticia'>Debido a los reiterados problemas con la energía eléctrica, mañana vendrán técnicos a revisar el cableado, por lo que se cortara la luz desde 10:00 AM y se alertara por este medio cuando vuelva a estar disponible.
      <br></br>
      Atte. La Administración</p>
    </div>
  )
}

export const Noticia3Page = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Comunidad de vecinos</h1>
      <NavBar />
      <NavLink className='volver' to='/'>Volver
      </NavLink>
      <h2 className='Titulo'>Alerta: Corte de luz</h2>
      <p className='parrafoNoticia'>Los trabajos han terminado, la luz volverá adentro de los próximos minutos. Con esto los problemas de intermitencia deberían estar solucionados, si aún persiste el problema en su departamento, por favor acercarse a recepción o informar a la administración.
      <br></br>
      Atte. La Administración</p>
    </div>
  )
}

export default Noticia1Page

