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

        <div className='navOptions'>

            <Link to="/videosScout" className='Link'>
              <div className='navOption'>
                <button className="navButton" style={{ backgroundColor: 'yellow', borderColor: 'black' }}></button>
                <span className="navText">VIDEOS SCOUT</span>
              </div>
            </Link>

            <Link to="/videosSteelers" className='Link'>
              <div className='navOption'>
                <button className="navButton" style={{ backgroundColor: 'black', borderColor: 'yellow' }}></button>
                <span className="navText">VIDEOS STEELERS</span>
              </div>
            </Link>

            <Link to="/drills" className='Link'>
              <div className='navOption'>
                <button className="navButton" style={{ backgroundColor: 'white', borderColor: 'red' }}></button>
                <span className="navText">DRILLS</span>
              </div>
            </Link>

            <Link to="/acondicionamientoFisico" className='Link'>
              <div className='navOption'>
                <button className="navButton" style={{ backgroundColor: 'red', borderColor: 'gold' }}></button>
                <span className="navText">ACONDICIONAMIENTO FISICO</span>
              </div>
            </Link>

            <Link to="/playbook" className='Link'>
              <div className='navOption'>
                <button className="navButton" style={{ backgroundColor: 'blue', borderColor: 'gold' }}></button>
                <span className="navText">PLAYBOOK</span>
              </div>
            </Link>

            <Link to="/documentosCoaches" className='Link'>
              <div className='navOption'>
                <button className="navButton" style={{ backgroundColor: 'teal', borderColor: 'black' }}></button>
                <span className="navText">DOCUMENTOS COACHES</span>
              </div>
            </Link>

            <Link to="/documentosAdministracion" className='Link'>
              <div className='navOption'>
                <button className="navButton" style={{ backgroundColor: 'turquoise', borderColor: 'black' }}></button>
                <span className="navText">DOCUMENTOS ADMINISTRACION</span>
              </div>
            </Link>

          <div className='navOption'>
            <button className="navButton" style={{ backgroundColor: 'green', borderColor: 'black'}}></button>
            <span className="navText">GENERADOR DE JUGADAS</span>
          </div>

        </div>

    </MantineProvider>
    )
}

export default NavScreen;