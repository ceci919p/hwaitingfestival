import MonStage from "./dayStages/MonStages";

export default function MonProgram({ schedule }) {
  // console.log(schedule);

  //new array of all the stages
  /*   const allStages = schedule.map((el) => ({
    name: el.stage,
  }));

  //gives array with filtered scene names
  let uniStage = [];

  //gives array with obj name: stage
  let cleanStages = allStages.filter((element) => {
    if (!uniStage.includes(element.name)) {
      uniStage.push(element.name);

      return true;
    }
    return false;
  }); */

  /*   let cleanStages = allStages.filter((element) => {
    if (!uniStage.includes(element.name)) {
      uniStage.push(element.name); */

  //return array or object with scenes
  //om that article make new list

  return (
    <section>
      <h2>Monday 8/8</h2>
      <MonStage schedule={schedule}></MonStage>
      {/*      {cleanStages.map((band) => {
        return <MonStage cleanStages={cleanStages} />;
      })} */}
    </section>
  );
}
