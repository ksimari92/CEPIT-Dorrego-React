import React from 'react'
import fotopersona from '../../imagenes/descarga.jpg'
import Count from '../useEffect/Count'
import './Perfil.css'

const Perfil = ({nombre}) => {




  return (
    <div>
      <img src={fotopersona} alt="Persona" />
      <h3>Hola soy {nombre}!</h3>
      <Count/>
    </div>
  )
}

export default Perfil