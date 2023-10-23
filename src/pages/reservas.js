import React from 'react'
import '../App.css'

import NavBar from '../components/nav_bar'

export const ReservasPage = () => {
      // Supongamos que tienes un array de horarios disponibles
  const horariosDisponibles = [
    { hora: '09:00 AM', disponible: true },
    { hora: '10:00 AM', disponible: false },
    { hora: '11:00 AM', disponible: true },
    // ... más horarios
  ];

  // Función para manejar la reserva
  const reservarEspacio = (hora) => {
    // Aquí puedes agregar la lógica para realizar la reserva
    // Esto podría incluir una solicitud al servidor o actualización de estado local.
    alert(`Reservaste el espacio a las ${hora}`);
  };
  return (
    <div className='Full_pag'>
    <h1 className='page__title'>Comunidad de vecinos</h1>
    <NavBar />
    <h2 className='probando'>Reserva de Espacios</h2>
    <div className="sub_cont1">


        <div className="filtro">
            <label htmlFor="categoria">Categoria:</label>
            <select id="categoria" name="categoria">
              <option value="0">Mostrar Todos</option>
              <option value="7361">Espacios Externos</option>
              <option value="28780">Espacios Internos</option>
            </select>
        </div>
        <div className="filtro">
            <label htmlFor="capacidad">Capacidad:</label>
            <select id="capacidad" name="capacidad">
              <option value="0">Mostrar Todos</option>
              <option value="5-10">5 - 10 personas</option>
              <option value="10-20">10 - 20 personas</option>
            </select>
        </div>
        <div className="filtro">
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" />
        </div>
        <div className="filtro">
            <label htmlFor="hora">Hora:</label>
            <input type="time" id="hora" name="hora" />
        </div>


        <button className="btn-primary" type="submit" id="s-lc-go">
        <div>Mostrar</div>
        <div>Disponibilidad</div>
        </button>
    </div>
    <div className="horarios-disponibles">
          <h3>Horarios Disponibles</h3>
          <ul>
            {horariosDisponibles.map((horario, index) => (
              <li key={index}>
                {horario.hora} {horario.disponible ? (
                  <button onClick={() => reservarEspacio(horario.hora)}>Reservar</button>
                ) : (
                  <span>No disponible</span>
                )}
              </li>
            ))}
          </ul>
        </div>

</div>
)
}

export default ReservasPage