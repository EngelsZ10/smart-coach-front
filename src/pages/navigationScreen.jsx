import { Link } from 'react-router-dom';
import { MantineProvider, Text } from '@mantine/core';

import './navigationScreen.css';

function NavScreen(){
    return(
      <MantineProvider withGlobalStyles withNormalizeCSS>    
        <div>
          <div className='imgcenter-div'>
          <img src="Logos/Logo circular1.png" alt="Logo Circular 1" className="imgcenter"/>  
          <img src="Logos/logo texto1.png" alt="Logo texto 1" className="imgcenter"/>
          </div>
          <Text className="center">BIENVENIDO A SMART COACH</Text>
          <Text className="center" style={{color:'#f58342'}}>ELIJA LA OPCIÓN DESEADA DANDO CLICK EN EL RECUADRO</Text>
        </div>

        <div className='navOptions'>

            <Link to="/admin" className='Link'>
              <div style={{ display: 'flex', justifyContent: 'center'}} className='navOption' >
                <button className="navButton"><img src="/Logos/Logo circular 2.png" alt="VideoScout" className='buttonImage'/></button>
                <span className="navText navText2">ADMIN</span>
              </div>
            </Link>

            <Link to="/scout" className='Link'>
              <div className='navOption'>
                <button className="navButton"><img src="/Logos/VideoScout/VIDEO SCOUT.png" alt="VideoScout" className='buttonImage'/></button>
                <span className="navText">VIDEOS SCOUT</span>
              </div>
            </Link>

            <Link to="/steelers" className='Link'>
              <div className='navOption'>
                <button className="navButton"><img src="/Logos/VideoSteelers/VIDEO STEELERS.png" alt="VideoSteelers" className='buttonImage'/></button>
                <span className="navText">VIDEOS STEELERS</span>
              </div>
            </Link>

            <Link to="/drills" className='Link'>
              <div className='navOption'>
                <button className="navButton"><img src="/Logos/drills.png" alt="drills" className='buttonImage'/></button>
                <span className="navText">DRILLS</span>
              </div>
            </Link>

            <Link to="/acondicionamiento" className='Link'>
              <div className='navOption'>
                <button className="navButton"><img src="/Logos/acondicionamiento fisico.png" alt="acondicionamientoFisico" className='buttonImage'/></button>
                <span className="navText">ACONDICIONAMIENTO FISICO</span>
              </div>
            </Link>

            <Link to="/playbook" className='Link'>
              <div className='navOption'>
                <button className="navButton"><img src="/Logos/playbook.png" alt="playbook" className='buttonImage'/></button>
                <span className="navText">PLAYBOOK</span>
              </div>
            </Link>

            <Link to="/coaches" className='Link'>
              <div className='navOption'>
                <button className="navButton"><img src="/Logos/documentos Coaches.png" alt="documentosCoaches" className='buttonImage'/></button>
                <span className="navText">DOCUMENTOS COACHES</span>
              </div>
            </Link>

            <Link to="/administracion" className='Link'>
              <div className='navOption'>
                <button className="navButton"><img src="/Logos/Documentos Administracion.png" alt="documentosAdministracion" className='buttonImage'/></button>
                <span className="navText">DOCUMENTOS ADMINISTRACION</span>
              </div>
            </Link>

          <div className='navOption'>
            <button className="navButton"><img src="/Logos/Generador de jugadas.png" alt="GeneradorJugadas" className='buttonImage'/></button>
            <span className="navText">GENERADOR DE JUGADAS</span>
          </div>

        </div>

    </MantineProvider>
    )
}

export default NavScreen;