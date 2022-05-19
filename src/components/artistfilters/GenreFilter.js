export default function GenreFilter({ setGenreFilter }) {
  return (
    <div>
      <button onClick={() => setGenreFilter("")}>All</button>
      <button onClick={() => setGenreFilter("Girl group")}>Girl group</button>
      <button onClick={() => setGenreFilter("Boy group")}>Boy Group</button>
      <button onClick={() => setGenreFilter("Soloist")}>Soloist</button>
      <button onClick={() => setGenreFilter("Co-ed")}>Co-ed</button>
    </div>
  );
}
