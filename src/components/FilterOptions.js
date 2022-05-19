import GenreFilter from "../components/artistfilters/GenreFilter";
import DayFilter from "../components//artistfilters/DayFilter";
import Sorting from "../components/artistfilters/Sorting";
import SearchFilter from "../components/artistfilters/SearchFilter";

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