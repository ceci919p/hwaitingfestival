export default function MonStages({ cleanSchedule }) {
  //console.log(schedule);

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
      <li key={a.name}>
        {a.act} {a.start}
      </li>
    );
  });

  //vanaheim
  let monVanList = [];

  monVan.forEach((a) => {
    monVanList.push(
      <li key={a.name}>
        {a.act} {a.start}
      </li>
    );
  });

  //Jotunheim
  let monJotnList = [];

  monJot.forEach((a) => {
    monJotnList.push(
      <li key={a.name}>
        {a.act} {a.start}
      </li>
    );
  });

  return (
    <>
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
    </>
  );
}
