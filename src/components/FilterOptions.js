import GenreFilter from "../components/GenreFilter";
import DayFilter from "../components/DayFilter";
import Sorting from "../components/Sorting";

export default function FilterOptions({
  setDayFilter,
  setGenreFilter,
  setSortDir,
  sortDir,
}) {
  return (
    <section>
      <GenreFilter setGenreFilter={setGenreFilter}></GenreFilter>
      <DayFilter setDayFilter={setDayFilter}></DayFilter>
      <Sorting setSortDir={setSortDir} sortDir={sortDir}></Sorting>
    </section>
  );
}
