import Galeria from './componentes/Galeria/Galeria';
import ListaDeContenidos from './componentes/ListaDeContenidos/ListaDeContenidos'
import Eventos2 from './componentes/Eventos/Eventos2';
import Rectangulo from './componentes/Rectangulo';
import MostrarDiv from './componentes/MostrarDiv';
import ConversorGrados from './componentes/ConversorGrados';
import { createContext,useContext } from 'react';
import UserContext from './componentes/Context/UserContext';
import CambiarImagen1 from './componentes/MostrarImagen';
import Count from './componentes/useEffect/Count';
import CountPair from './componentes/useEffect/CountPair';


function App() {
  let nombres = {
    users : ['Matias', 'juan', 'Luis', 'Pedro'],
    edades: [2,3,4,9]
  }
  


  return (
    <div>
      {/* <Eventos2/> */}
      {/* <ListaDeContenidos /> */}
      {/* <Rectangulo/> */}
      {/* <Rectangulo />
      <ConversorGrados />
      <MostrarDiv />
      <Galeria nombres={nombres} /> */}
      
      {/* <CambiarImagen1/> */}
      {/* <CountPair/> */}

      <UserContext.Provider value={nombres}>
        <Galeria />
      </UserContext.Provider>
   

      
    </div>
  );
}

export default App
