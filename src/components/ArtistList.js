import Artist from "./Artist";

export default function ArtistList({ schedule, artists, dayFilter }) {
  //console.log(schedule[0].day);
  let filteredSchedule = [];
  schedule.forEach((day) => {
    console.log(day.day);
    if (day.day === dayFilter || dayFilter === "all") {
      filteredSchedule.push(day);
    }
  });
  const filterData = [];
  artists.forEach((band) => {
    filteredSchedule.forEach((schedule) => {
      if (band.name.includes(schedule.act)) {
        filterData.push(band);
      }
    });
  });

  //const filte

  const artistsList = filterData.map((a) => <Artist key={a.name} artist={a} />);

  return <section id="Artistlist">{artistsList}</section>;
}
