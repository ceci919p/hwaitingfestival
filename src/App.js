import { Link, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Artists from "./routes/Artists";
import Schedule from "./routes/Schedule";
import SingleArtist from "./routes/SingleArtist";

function App() {
  return (
    <div className="App">
      <aside>
        <nav>
          <Link to="/Artists">Artists</Link> |{" "}
          <Link to="/Schedule">Schedule</Link>
        </nav>
        <header>
          {" "}
          <Link to="/">Home</Link>
        </header>
      </aside>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artists" element={<Artists />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="artists/:bandName" element={<SingleArtist />} />
      </Routes>
    </div>
  );
}

export default App;
