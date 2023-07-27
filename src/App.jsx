import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavScreen from './pages/navigationScreen';
import './App.css';

import Login from './Login';

export default function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<NavScreen/>} />
            <Route path="/videosScout" />
            <Route path="/videosSteelers"  />
            <Route path="/drills"  />
            <Route path="/acondicionamientoFisico"/>
            <Route path="/playbook"  />
            <Route path="/documentosCoaches"/>
            <Route path="/documentosAdministracion"/>
            <Route path="/video"/>
          </Routes>
        </BrowserRouter>
  );
}

// npm install react-router-dom
