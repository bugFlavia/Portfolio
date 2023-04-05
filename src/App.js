import Menu from "./componentes/Menu/Menu";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Sobre from "./componentes/Sobre/Sobre";
import Servicos from "./componentes/Servicos/Servicos";
import Portifolio from "./componentes/Portifolio/Portifolio";
import Contato from "./componentes/Contato/Contato";
import Rodape from "./componentes/Rodape/Rodape";


function App() {

  const historico= (texto) => {
    console.log(texto)
  }

  return (
    <div className="App">
      <Menu/>
      <Cabecalho/>
      <Sobre/>
      <Servicos/>
      <Portifolio/>
      <Contato mensagemAdicionada={texto => historico(texto)}/>
      <Rodape/>
    </div>
  );
}

export default App;
