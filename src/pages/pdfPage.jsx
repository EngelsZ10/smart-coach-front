import { Link } from "react-router-dom";
import "./pdfPage.css";

function PdfPage() {
    return (
        <div>
            <Link to="/documentosCoaches">
                <button className="backbutton">BACK</button>
            </Link>
            <div className="pdfviews">
                <iframe
                    src="../Programa Tec Verano.pdf"
                    title="PDF2"
                    height="100%"
                    width="95%"/>
            </div>
        </div>
    );
}

export default PdfPage