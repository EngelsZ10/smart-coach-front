import { Link } from "react-router-dom";

function VidScout() {
  return (
    <div>
      <Link to="/">
        <button>BACK</button>
      </Link>
      <h1>vidScout</h1>
      <Link to="/video">
        <button>Video</button>
      </Link>
    </div>
  );
}

export default VidScout;
