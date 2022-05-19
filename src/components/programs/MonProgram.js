import { Link } from "react-router-dom";

export default function MonProgram({ cleanSchedule }) {
  // console.log(schedule);

  //filter to my desired stages
  let monMid = [];
  let monVan = [];
  let monJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "mon") {
      monMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "mon") {
      monVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "mon") {
      monJot.push(el);
    }
  });

  //making my list items
  //midgard
  let monMidList = [];

  monMid.forEach((a) => {
    monMidList.push(
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
  let monVanList = [];

  monVan.forEach((a) => {
    monVanList.push(
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
  let monJotnList = [];

  monJot.forEach((a) => {
    monJotnList.push(
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
      <h2>Monday 8/8</h2>
      <article>
        <h3>Midgard</h3>
        <ul>{monMidList}</ul>
      </article>
      <article>
        <h3>Vanaheim</h3>
        <ul>{monVanList}</ul>
      </article>
      <article>
        <h3>Jotunheim</h3>
        <ul>{monJotnList}</ul>
      </article>
    </section>
  );
}
