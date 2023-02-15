import React, { useState } from 'react'

const Eventos2 = () => {
    const [monto, setMonto] = useState(0)

    const calcularCotizacion = (e) => {
        let montoIngresado = e.target.value ;
        let cotizacion = montoIngresado/300;

        setMonto(cotizacion)
    }

  return (
    <div>
        <input type="text" onChange={calcularCotizacion}/>
        <h3>Conversion: {monto} </h3>
    </div>
  )
}

export default Eventos2