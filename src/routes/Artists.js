import { useState, useEffect } from "react";
import ArtistList from "../components/ArtistList";
import FilterOptions from "../components/FilterOptions";

function Artists(props) {
  const [artists, setArtists] = useState([]);
  const [dayFilter, setDayFilter] = useState("All Days");
  const [genreFilter, setGenreFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
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

  return (
    <main id="artists-main">
      <header id="artists-header">
        <h1>Artists</h1>
      </header>

      <FilterOptions
        setDayFilter={setDayFilter}
        setGenreFilter={setGenreFilter}
        setSearchInput={setSearchInput}
        setSortDir={setSortDir}
        sortDir={sortDir}
      ></FilterOptions>
      <ArtistList
        schedule={props.schedule}
        artists={artists}
        dayFilter={dayFilter}
        genreFilter={genreFilter}
        searchInput={searchInput}
        sort={sort}
        setSort={setSort}
        sortDir={sortDir}
      ></ArtistList>
    </main>
  );
}

export default Artists;
