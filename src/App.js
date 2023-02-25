import Galeria from './componentes/Galeria/Galeria';
import ListaDeContenidos from './componentes/ListaDeContenidos/ListaDeContenidos'
import Eventos2 from './componentes/Eventos/Eventos2';
import Rectangulo from './componentes/Rectangulo';
import MostrarDiv from './componentes/MostrarDiv';
import ConversorGrados from './componentes/ConversorGrados';


function App() {

  let nombres = ['Matias', 'juan', 'Luis', 'Pedro'];


  return (
    <div>
      {/* <Eventos2/> */}
      {/* <ListaDeContenidos /> */}
      {/* <Rectangulo/> */}
      <Rectangulo />
      <ConversorGrados />
      <MostrarDiv />
      <Galeria nombres={nombres} />

    </div>
  );
}

export default App;
