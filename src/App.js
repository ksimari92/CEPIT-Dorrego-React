import Galeria from './componentes/Galeria/Galeria';
import ListaDeContenidos from './componentes/ListaDeContenidos/ListaDeContenidos'
import Eventos2 from './componentes/Eventos/Eventos2';


function App() {

let nombres = ['Matias', 'juan', 'Luis', 'Pedro'];


  return (
     <div>
        <Eventos2/>
       <ListaDeContenidos />

      <Galeria nombres={nombres}/> 
  
    </div> 
    );
}

export default App;
