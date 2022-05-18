import Artist from "./Artist";

export default function ArtistList({
  schedule,
  artists,
  dayFilter,
  genreFilter,
}) {
  //console.log(schedule[0].day);
  let filteredSchedule = [];
  schedule.forEach((day) => {
    console.log(day.day);
    if (day.day === dayFilter || dayFilter === "") {
      filteredSchedule.push(day);
    }
  });
  const dayFilterData = [];
  artists.forEach((band) => {
    filteredSchedule.forEach((schedule) => {
      if (band.name.includes(schedule.act)) {
        dayFilterData.push(band);
      }
    });
  });
  const filteredArtists =
    genreFilter === ""
      ? dayFilterData
      : dayFilterData.filter((artist) => artist.genre === genreFilter);

  //const genreFilterData = [];

  const artistsList = filteredArtists.map((a) => (
    <Artist key={a.name} artist={a} />
  ));

  return <section id="Artistlist">{artistsList}</section>;
}
