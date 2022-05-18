import Artist from "./Artist";

export default function ArtistList({
  schedule,
  artists,
  dayFilter,
  genreFilter,
  sort,
  setSort,
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

  //sorting
  //making copy since sort is destructive
  let copySortedArtists = JSON.parse(JSON.stringify(filteredArtists));
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

  return <section id="Artistlist">{artistsList}</section>;
}
