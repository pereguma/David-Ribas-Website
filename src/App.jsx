import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Espai from './pages/Espai';
import Obres from './pages/Obres';
import Publicacions from './pages/Publicacions';
import Contacte from './pages/Contacte';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="espai" element={<Espai />} />
        <Route path="treball" element={<Obres />} />
        <Route path="obres/*" element={<Navigate to="/treball" replace />} />
        <Route path="publicacions" element={<Publicacions />} />
        <Route path="contacte" element={<Contacte />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
