import React from 'react'
import "./Noticia.css"
import { NavLink } from 'react-router-dom'

function Noticia(props) {
  return (<div className='Noticia'>
    <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to={props.link}
      ><h2>{props.titulo}</h2>
      <p>{props.fecha}</p></NavLink>
    </div>)
}

export default Noticia