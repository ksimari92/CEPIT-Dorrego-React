import React, { useState } from 'react'

function CambiarImagen1 () {

    const ANIMAL_IMAGES = {
        img1: "http://via.placeholder.com/111x111",
        img2: "http://via.placeholder.com/222x222",
        img3: "http://via.placeholder.com/333x333",
        }

    const [boton, setBoton] = useState(ANIMAL_IMAGES.img1)

    const [boton1, setBoton1] = useState("")
    
    const handleClickButton = (image) => {
    setBoton (ANIMAL_IMAGES[image])
    setBoton1 (ANIMAL_IMAGES[image])
    }

    


     
    return (
        <div>
        <button onClick = { () => handleClickButton('img1')}>Imagen1</button>
        <button onClick = { () => handleClickButton('img2')}>Imagen2</button>
        <button onClick = { () => handleClickButton('img3')}>Imagen3</button>
        <div>
    <p>{boton1}</p>
    </div>
<div className='contenedor-imagen'>
<img src={boton} alt="imagen" />
</div>
</div>
)}
  
export default CambiarImagen1