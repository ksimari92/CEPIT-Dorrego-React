import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
import Perfil from '../Perfil/Perfil';
import './Galeria.css';

const Galeria = () => {
    let users = useContext(UserContext);


    return (
        <div>
            <h2 className='titulo-galeria'>Galeria</h2>
            <div className='contenedor-fotos'>
                {
                    users.users.map(nombre => {
                      return <Perfil nombre={nombre} />
                    } )
                
            }
            </div>
        </div>
    )
}

export default Galeria