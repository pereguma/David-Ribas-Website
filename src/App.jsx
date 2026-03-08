import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Espai from './pages/Espai';
import Obres from './pages/Obres';
import Publicacions from './pages/Publicacions';
import Contacte from './pages/Contacte';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="espai" element={<Espai />} />
        <Route path="obres/*" element={<Obres />} />
        <Route path="publicacions" element={<Publicacions />} />
        <Route path="contacte" element={<Contacte />} />
      </Route>
    </Routes>
  );
}

export default App;
