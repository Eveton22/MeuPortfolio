import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '.'
import Home from './pages/home/Homer';
import Sobre from './pages/sobre/Sobre';
import Habilidades from './pages/habilidades/Habilidades';
import Projetos from './pages/projetos/Projetos';
import Contato from './pages/contato/Contato';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/habilidades" element={<Habilidades />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
