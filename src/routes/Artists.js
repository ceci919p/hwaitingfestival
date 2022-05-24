import { useState } from "react";
import ArtistList from "../components/ArtistList";
import FilterOptions from "../components/FilterOptions";

function Artists(props) {
  const [dayFilter, setDayFilter] = useState("All Days");
  const [genreFilter, setGenreFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  //const [fullArtistList, setFullArtistList] = useState(makeList(artists, schedule))
  //navn på array - det er det der er state, navn på funktion - det skal kalde state (rebuilde)

  return (
    <>
      <main id="artists-main">
        <header id="artists-header">
          <h1>Artists</h1>
        </header>
        <FilterOptions
          setDayFilter={setDayFilter}
          setGenreFilter={setGenreFilter}
          genreFilter={genreFilter}
          setSearchInput={setSearchInput}
          setSortDir={setSortDir}
          sortDir={sortDir}
        ></FilterOptions>
        <ArtistList
          schedule={props.schedule}
          artists={props.artists}
          dayFilter={dayFilter}
          genreFilter={genreFilter}
          searchInput={searchInput}
          sort={sort}
          setSort={setSort}
          sortDir={sortDir}
        ></ArtistList>
      </main>
    </>
  );
}

export default Artists;
