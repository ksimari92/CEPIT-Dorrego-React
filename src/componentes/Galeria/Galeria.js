import React from 'react';
import Perfil from '../Perfil/Perfil';
import './Galeria.css';

const Galeria = ({ nombres }) => {

    console.log(nombres)

    return (
        <div>
            <h2 className='titulo-galeria'>Galeria</h2>
            <div className='contenedor-fotos'>
                {
                    nombres.map(nombre => {
                      return <Perfil nombre={nombre} />
                    } )
                
            }
            </div>
        </div>
    )
}

export default Galeria