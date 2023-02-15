import React from 'react'
import fotopersona from '../../imagenes/descarga.jpg'
import './Perfil.css'

const Perfil = ({nombre}) => {
 

  return (
    <div>
      <img src={fotopersona} alt="Persona" />
      <h3>Hola soy {nombre}!</h3>
    </div>
  )
}

export default Perfil