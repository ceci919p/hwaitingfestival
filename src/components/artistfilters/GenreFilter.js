export default function GenreFilter({ setGenreFilter }) {
  return (
    <div id="genre-filter">
      <button
        className="genre-filter-button"
        onClick={() => setGenreFilter("")}
      >
        All artists
      </button>
      <button
        id="button-girlgroup"
        className="genre-filter-button"
        onClick={() => setGenreFilter("Girl group")}
      >
        Girl group
      </button>
      <button
        id="button-boygroup"
        className="genre-filter-button"
        onClick={() => setGenreFilter("Boy group")}
      >
        Boy Group
      </button>
      <button
        id="button-soloist"
        className="genre-filter-button"
        onClick={() => setGenreFilter("Soloist")}
      >
        Soloist
      </button>
      <button
        id="button-coed"
        className="genre-filter-button"
        onClick={() => setGenreFilter("Co-ed")}
      >
        Co-ed
      </button>
    </div>
  );
}
