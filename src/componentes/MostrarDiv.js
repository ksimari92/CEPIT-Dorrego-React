import React, { useContext, useState } from 'react'
import UserContext from './Context/UserContext';

const MostrarDiv = () => {
    const user = useContext(UserContext);
    const [mostrar, setMostrar] = useState(true);
    const [boton, setBoton] = useState("Ocultar");

    const handleClickButton = () => {
        setMostrar(!mostrar)
        if (boton === "Ocultar"){
            setBoton("Mostrar")
        } else if (boton === "Mostrar") {
            setBoton("Ocultar")
        }
    }

    return (
        <>
          {
            mostrar &&
              <div>
                {user}
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste maxime,
                      deleniti sapiente fugit modi impedit distinctio alias corporis facere deserunt
                      a atque sed nulla? Quidem molestias et excepturi error.</p>
              </div> 
            //   :

            //   <div>No quiero que se vea</div>
         

          }
            <button onClick={handleClickButton}>{boton}</button>
        </>
    )
} 
 


export default MostrarDiv