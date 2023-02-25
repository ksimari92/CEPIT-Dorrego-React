import React, { useState } from 'react'

const ConversorGrados = () => {
const [grados, setGrados] = useState(null);

const handleChangeInput = (e) => {
    let gradosCentigrados = e.target.value;

    let gradosFarenheit = (gradosCentigrados * 9/5) + 32;

    setGrados(gradosFarenheit)

    if(gradosCentigrados === "" ) {
        setGrados(null)
    }
}

  return (
    <div>
        <h1>Conversor de Centigrados a Farenheit</h1>
        <input type="text" onChange={handleChangeInput} placeholder='Ingrese grados Centigrados' />
        <p>Conversion: {grados}</p>
    </div>
  )
}

export default ConversorGrados