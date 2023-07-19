import { Link } from "react-router-dom";
import { Text } from "@mantine/core";
import "./docCoach.css";

function DocCoach() {
  return (
    
        <div className="docCoach">
          <Link to="/">
            <button className="backbutton">BACK</button>
          </Link>
          <img src="SteelersLogo.png" alt="Mantine logo" className="imgright"/>
          <h1 className="title">Documentos Coaches</h1>
          <div className="pdfcase-container">
            <div className="pdfcase">
              <div className="pdfview">

              </div>
              <Link to="/documentosCoaches/pdf">
                <Text className="pdfname">Reglamentos Coaches</Text>
              </Link>
            </div>
            <div className="pdfcase">
              <div className="pdfview">
              <iframe
                src="Programa Tec Verano.pdf"
                title="PDF"
                height="100%"
                width="100%"/>
              </div>
              <Link to="/documentosCoaches/pdf">
                <Text className="pdfname">Formatos Coaches</Text>
              </Link>
            </div>
            <div className="pdfcase">
              <div className="pdfview">

              </div>
              <Link to="/documentosCoaches/pdf">
                <Text className="pdfname">Reglamento ONEFA</Text>
              </Link>
            </div>
            <div className="pdfcase">
              <div className="pdfview">

              </div>
              <Link to="/documentosCoaches/pdf">
                <Text className="pdfname">Reglamento OFANO</Text>
              </Link>
            </div>
          </div>

        </div>
        
  );
}

export default DocCoach;