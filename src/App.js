import { Link, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Artists from "./routes/Artists";
import Program from "./routes/Program";
import SingleArtist from "./routes/SingleArtist";
import logo from "./images/logo_light.svg";

function App() {
  return (
    <div className="App">
      <aside>
        <nav>
          <Link to="/artists">Artists</Link> |{" "}
          <Link to="/program">Program</Link>
        </nav>
        <header>
          {" "}
          <Link to="/">
            <img id="logo" src={logo} alt="" />
          </Link>
        </header>
      </aside>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artists" element={<Artists />} />
        <Route path="program" element={<Program />} />
        <Route path="artists/:bandName" element={<SingleArtist />} />
      </Routes>
    </div>
  );
}

export default App;
