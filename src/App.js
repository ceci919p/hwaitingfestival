import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Artists from "./routes/Artists";
import Program from "./routes/Program";
import SingleArtist from "./routes/SingleArtist";
import logo from "./images/logo_light.svg";

function App() {
  const [schedule, setSchedule] = useState([]);

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getSchedule() {
        const resS = await fetch("https://hwaiting.herokuapp.com/schedule");
        const scheduleData = await resS.json();

        const flatArray = [];

        for (const stage in scheduleData) {
          //console.log(`${stage}: ${scheduleData[stage]}`);
          //mit array af stages:
          let stageName = stage;

          //stageData: 3 objekter(stages) med hver 7 objekter som hver har et array med acts
          const stageData = scheduleData[stageName];

          for (let day in stageData) {
            //objDay: arrays med acts i (objekter)
            const dayData = stageData[day];

            for (const obj in dayData) {
              //bandAct: alle mine bandact objekter
              const bandAct = dayData[obj];
              flatArray.push({ ...bandAct, day, stage });
            }
          }
        }

        setSchedule(flatArray);
      }
      getSchedule();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

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
        <Route path="artists" element={<Artists schedule={schedule} />} />
        <Route path="program" element={<Program schedule={schedule} />} />
        <Route path="artists/:bandName" element={<SingleArtist />} />
      </Routes>
    </div>
  );
}

export default App;
