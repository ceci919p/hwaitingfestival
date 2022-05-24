import Artist from "./Artist";

export default function ArtistList({
  schedule,
  artists,
  dayFilter,
  genreFilter,
  searchInput,
  sort,
  sortDir,
}) {
  //finding the days that match whatever the filter is and put them in array
  let filteredSchedule = [];
  schedule.forEach((d) => {
    if (d.day === dayFilter || dayFilter === "All Days") {
      filteredSchedule.push(d);
    }
  });
  //compare names and if they match push to new array
  //for each band that has same name as objects in array push that band to new array
  let dayFilterData = [];
  artists.forEach((band) => {
    filteredSchedule.forEach((a) => {
      if (band.name.includes(a.act)) {
        dayFilterData.push(band);
      }
    });
  });

  //genre filter
  let filteredArtists = [];
  filteredArtists =
    genreFilter === ""
      ? dayFilterData
      : dayFilterData.filter((artist) => artist.genre === genreFilter);

  //search filter
  let searchedFilter = [];
  filteredArtists.filter((val) => {
    if (searchInput === "") {
      searchedFilter.push(val);
    } else if (val.name.toLowerCase().includes(searchInput.toLowerCase())) {
      searchedFilter.push(val);
    }
    return searchedFilter;
  });

  //sorting
  //making copy since sort is destructive
  let copySortedArtists = JSON.parse(JSON.stringify(searchedFilter));
  //sort funktion
  function compare(a, b) {
    //lowercase to make sorting caseinsensitive
    let aName = a[sort].toLowerCase();
    let bName = b[sort].toLowerCase();

    if (aName > bName) {
      return 1;
    }
    if (aName < bName) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
  //sort new array depending on direction
  if (sortDir === "asc") {
    copySortedArtists.sort(compare);
  } else {
    copySortedArtists.sort((a, b) => compare(b, a));
  }

  //making our artists for our artistlist
  let artistsList = copySortedArtists.map((a) => (
    <Artist key={a.name} artist={a} />
  ));
  //both empty in the beginning
  //only filter empty when filter is used
  //if artist empty make load, else if filter is empty and artist is full make search thing
  //if (artist === 0) {render loader} else if (filter === 0 && artist >0) { show no result } else { show list}

  if (artists.length === 0) {
    console.log("LOADING");
  } else if (artistsList.length === 0 && artists.length > 0) {
    console.log("NO RESULTS");
  } else {
    console.log("SHOWING LIST");
  }
  //<div style={{'backgroundColor': status === 'approved' ? 'blue' : status === 'pending' ? 'black' : 'red'}}></div>
  return (
    <>
      {artists.length === 0 ? (
        <div>
          <h4 id="artists-loading">LOADING</h4>
        </div>
      ) : /*  <div id="search-result-container">
          <h4>No Result Found</h4>
          <p>Sorry, that filter combination has no results</p>
          <p>Please try different criteria</p>
        </div> */
      artistsList.length === 0 && artists.length > 0 ? (
        <div id="search-result-container">
          <h4>No Result Found</h4>
          <p>Sorry, that filter combination has no results</p>
          <p>Please try different criteria</p>
        </div>
      ) : (
        <section id="Artistlist">{artistsList}</section>
      )}
    </>
  );
}
