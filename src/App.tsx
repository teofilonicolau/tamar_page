import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';
import { TermosUso } from './pages/TermosUso';
import { Cartao } from './pages/Cartao';

function App() {
  return (
    <Router>
      <div className="bg-brand-navy min-h-screen text-white overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosUso />} />
          <Route path="/cartao" element={<Cartao />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

