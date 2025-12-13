import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';

function App() {
  return (
    <Router>
      <div className="bg-brand-navy min-h-screen text-white overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

