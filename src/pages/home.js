import React from 'react'

import Noticia from '../components/Noticia'
import NavBar from '../components/nav_bar'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Comunidad de vecinos</h1>
      <NavBar />
      <h2 className='Titulo'>Noticias</h2>
      <div className='Lista'>
      <Noticia titulo='Alerta: Corte de luz' fecha='22/10' link='noticias/3'/>
      <Noticia titulo='Aviso: Se programa corte de luz' fecha='21/10'link='noticias/2'/>
      <Noticia titulo='Aviso: ¿Problemas con la luz?' fecha='19/10' link='noticias/1'/>
      </div>
    </div>
  )
}

export default HomePage
