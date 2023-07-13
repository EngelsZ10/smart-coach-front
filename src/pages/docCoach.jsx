import { Link } from "react-router-dom";
import "./docCoach.css";

function DocCoach() {
  return (
        <div className="docCoach">
          <Link to="/">
            <button>BACK</button>
          </Link>
          <h1>Documentos Coaches</h1>
        </div>
  );
}

export default DocCoach;