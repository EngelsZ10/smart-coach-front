import { Link } from 'react-router-dom';
import { MantineProvider, Text } from '@mantine/core';

import './navigationScreen.css';

function NavScreen(){
    return(
      <MantineProvider withGlobalStyles withNormalizeCSS>    
        <div style = {{marginTop: '2%'}}>
          <img src="SteelersLogo.png" alt="Mantine logo" className="imgcenter"/>
          <b><Text className="center">BIENVENIDO A SMART COACH</Text></b>
          <b><Text className="center" style={{color:'#f58342'}}>ELIJA LA OPCIÓN DESEADA DANDO CLICK EN EL RECUADRO</Text></b>
        </div>

        <div>

          <div className='navOption'>
            <Link to="/videosScout">
            <button className="navButton" style={{ backgroundColor: 'yellow', borderColor: 'black' }}></button>
            </Link>
            <span className="navText">VIDEOS SCOUT</span>
          </div>
          <div className='navOption'>
            <Link to="/videosSteelers">
            <button className="navButton" style={{ backgroundColor: 'black', borderColor: 'yellow' }}></button>
            </Link>
            <span className="navText">VIDEOS STEELERS</span>
          </div>
          <div className='navOption'>
            <Link to="/drills">
            <button className="navButton" style={{ backgroundColor: 'white', borderColor: 'red' }}></button>
            </Link>
            <span className="navText">DRILLS</span>
          </div>
          <div className='navOption'>
            <Link to="/acondicionamientoFisico">
            <button className="navButton" style={{ backgroundColor: 'red', borderColor: 'gold' }}></button>
            </Link>
            <span className="navText">ACONDICIONAMIENTO FISICO</span>
          </div>
          <div className='navOption'>
            <Link to="/playbook">
            <button className="navButton" style={{ backgroundColor: 'blue', borderColor: 'gold' }}></button>
            </Link>
            <span className="navText">PLAYBOOK</span>
          </div>
          <div className='navOption'>
            <Link to="/documentosCoaches">
            <button className="navButton" style={{ backgroundColor: 'teal', borderColor: 'black' }}></button>
            </Link>
            <span className="navText">DOCUMENTOS COACHES</span>
          </div>
          <div className='navOption'>
            <Link to="/documentosAdministracion">
            <button className="navButton" style={{ backgroundColor: 'turquoise', borderColor: 'black' }}></button>
            </Link>
            <span className="navText">DOCUMENTOS ADMINISTRACION</span>
          </div>
          <div className='navOption' style={{marginBottom: '2%'}}>
            <button className="navButton" style={{ backgroundColor: 'green', borderColor: 'black' }}></button>
            <span className="navText">GENERADOR DE JUGADAS</span>
          </div>

        </div>

    </MantineProvider>
    )
}

export default NavScreen;