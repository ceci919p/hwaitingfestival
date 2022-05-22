export default function SingleviewMain({ artist }) {
  console.log(artist);
  return (
    <main>
      <header>
        <div
          style={{
            backgroundImage: `url(${
              !artist[0].logo.includes("http")
                ? `https://hwaiting.herokuapp.com/${artist[0].logo}`
                : artist[0].logo
            })`,
          }}
        >
          <h1>{artist[0].name}</h1>
        </div>
      </header>
    </main>
  );
}
