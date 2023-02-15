import React, { useState } from 'react'

const Eventos = () => {
const [name, setName] = useState("Francisco");

const handleClickButton = () => {
  if (name === "Francisco"){
    setName("Julian");
  }else if (name === "Julian"){
    setName("Francisco");
  }
}

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={handleClickButton} >Cambiar nombre</button>
    </div>
  )
}

export default Eventos