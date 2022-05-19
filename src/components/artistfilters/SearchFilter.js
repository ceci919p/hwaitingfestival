export default function SearchFilter({ setSearchInput }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(event) => {
        setSearchInput(event.target.value);
      }}
    ></input>
  );
}
