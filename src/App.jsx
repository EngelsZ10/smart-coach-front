import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavScreen from './pages/navigationScreen';
import './App.css';

import CategoryView from './pages/CategoryView';
import navigation from './data/navigation.json';

export default function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavScreen/>} />

            <Route path="scout">
              <Route index element={<CategoryView viewData={navigation.scout}/>}/>
              <Route path="ofensa" element={<CategoryView viewData={navigation.ofensa}/>}/>
              <Route path="defensa" element={<CategoryView viewData={navigation.defensa}/>}/>
              <Route path="especiales" element={<CategoryView viewData={navigation.especiales}/>}/>
            </Route>

            <Route path="steelers">
              <Route index element={<CategoryView viewData={navigation.steelers}/>}/>
              <Route path="ofensa" element={<CategoryView viewData={navigation.ofensa}/>}/>
              <Route path="defensa" element={<CategoryView viewData={navigation.defensa}/>}/>
              <Route path="especiales" element={<CategoryView viewData={navigation.especiales}/>}/>
            </Route>

            <Route path="drills">
              <Route index element={<CategoryView viewData={navigation.drills}/>}/>
            </Route>

            <Route path="acondicionamiento">
              <Route index element={<CategoryView viewData={navigation.acondicionamiento}/>}/>
              <Route path="ligas" element={<CategoryView viewData={navigation.ligas}/>}/>
              <Route path="gym" element={<CategoryView viewData={navigation.gym}/>}/>
            </Route>

            <Route path="playbook">
              <Route index element={<CategoryView viewData={navigation.playbook}/>}/>
            </Route>

            <Route path="coaches">
              <Route index element={<CategoryView viewData={navigation.coaches}/>}/>
            </Route>

            <Route path="administracion">
              <Route index element={<CategoryView viewData={navigation.administracion}/>}/>
            </Route>

          </Routes>
        </BrowserRouter>
  );
}