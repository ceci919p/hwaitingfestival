import { Link } from "react-router-dom";

export default function FriProgram({ cleanSchedule }) {
  //filter to my desired stages
  let friMid = [];
  let friVan = [];
  let friJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "fri") {
      friMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "fri") {
      friVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "fri") {
      friJot.push(el);
    }
  });

  //making my list items
  //midgard
  let friMidList = [];

  friMid.forEach((a) => {
    friMidList.push(
      <Link
        key={a.act}
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${a.act.replace(/\s+/g, "+")}`}
      >
        <li>
          {a.act} {a.start}
        </li>
      </Link>
    );
  });

  //vanaheim
  let friVanList = [];

  friVan.forEach((a) => {
    friVanList.push(
      <Link
        key={a.act}
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${a.act.replace(/\s+/g, "+")}`}
      >
        <li>
          {a.act} {a.start}
        </li>
      </Link>
    );
  });

  //Jotunheim
  let friJotnList = [];

  friJot.forEach((a) => {
    friJotnList.push(
      <Link
        key={a.act}
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${a.act.replace(/\s+/g, "+")}`}
      >
        <li>
          {a.act} {a.start}
        </li>
      </Link>
    );
  });

  return (
    <section>
      <h2>Friday 12/8</h2>
      <article>
        <h3>Midgard</h3>
        <ul>{friMidList}</ul>
      </article>
      <article>
        <h3>Vanaheim</h3>
        <ul>{friVanList}</ul>
      </article>
      <article>
        <h3>Jotunheim</h3>
        <ul>{friJotnList}</ul>
      </article>
    </section>
  );
}
