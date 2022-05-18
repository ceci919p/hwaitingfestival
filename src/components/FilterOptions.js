import GenreFilter from "../components/GenreFilter";
import DayFilter from "../components/DayFilter";
import Sorting from "../components/Sorting";
import SearchFilter from "../components/SearchFilter";

export default function FilterOptions({
  setDayFilter,
  setGenreFilter,
  setSearchInput,
  setSortDir,
  sortDir,
}) {
  return (
    <section>
      <GenreFilter setGenreFilter={setGenreFilter}></GenreFilter>
      <DayFilter setDayFilter={setDayFilter}></DayFilter>
      <SearchFilter setSearchInput={setSearchInput}></SearchFilter>
      <Sorting setSortDir={setSortDir} sortDir={sortDir}></Sorting>
    </section>
  );
}
