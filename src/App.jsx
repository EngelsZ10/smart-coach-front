import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavScreen from './pages/navigationScreen';
import './App.css';
import VidScout from './pages/vidScout';
import VidSteel from './pages/vidSteel';
import Drills from './pages/drills';
import AcFisico from './pages/acFisico';
import PlayBook from './pages/playbook';
import DocCoach from './pages/docCoach';
import DocAdm from './pages/docAdm';
import MostrarVideo from './pages/mostrarVideo';

export default function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavScreen/>} />
            <Route path="/videosScout" element={<VidScout />} />
            <Route path="/videosSteelers" element={<VidSteel />} />
            <Route path="/drills" element={<Drills />} />
            <Route path="/acondicionamientoFisico" element={<AcFisico />} />
            <Route path="/playbook" element={<PlayBook />} />
            <Route path="/documentosCoaches" element={<DocCoach />} />
            <Route path="/documentosAdministracion" element={<DocAdm />} />
            <Route path="/video" element={<MostrarVideo />} />
          </Routes>
        </BrowserRouter>
  );
}

// npm install react-router-dom
