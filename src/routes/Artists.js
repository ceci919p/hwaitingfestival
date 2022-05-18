import { useState, useEffect } from "react";
import ArtistList from "../components/ArtistList";
import FilterOptions from "../components/FilterOptions";

function Artists() {
  const [artists, setArtists] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [dayFilter, setDayFilter] = useState("All Days");
  const [genreFilter, setGenreFilter] = useState("");
  const [sort, setSort] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  //const [fullArtistList, setFullArtistList] = useState(makeList(artists, schedule))
  //navn på array - det er det der er state, navn på funktion - det skal kalde state (rebuilde)

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getArtists() {
        const res = await fetch("https://hwaiting.herokuapp.com/bands");
        const data = await res.json();
        setArtists(data);
      }
      getArtists();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

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
    <main id="artists-main">
      <header id="artists-header">
        <h1>Artists</h1>
        <hr></hr>
      </header>
      <FilterOptions
        setDayFilter={setDayFilter}
        setGenreFilter={setGenreFilter}
        setSortDir={setSortDir}
        sortDir={sortDir}
      ></FilterOptions>
      <ArtistList
        schedule={schedule}
        artists={artists}
        dayFilter={dayFilter}
        genreFilter={genreFilter}
        sort={sort}
        setSort={setSort}
        sortDir={sortDir}
      ></ArtistList>
    </main>
  );
}

export default Artists;
