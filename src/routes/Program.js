import ProgramNav from "../components/ProgramNav";
import MonProgram from "../components/programs/MonProgram";
import TueProgram from "../components/programs/TueProgram";
import WedProgram from "../components/programs/WedProgram";
import ThuProgram from "../components/programs/ThuProgram";
import FriProgram from "../components/programs/FriProgram";
import SatProgram from "../components/programs/SatProgram";
import SunProgram from "../components/programs/SunProgram";

export default function Program(props) {
  //console.log(props.schedule);
  let cleanSchedule = [];
  //fjerner breaks fra schedule
  props.schedule.forEach((e) => {
    if (e.act !== "break") {
      cleanSchedule.push(e);
    }
  });

  return (
    <main id="program-main">
      <header id="program-header">
        <h1>Program</h1>
      </header>
      <ProgramNav cleanSchedule={cleanSchedule}></ProgramNav>
      <MonProgram cleanSchedule={cleanSchedule}></MonProgram>
      <TueProgram cleanSchedule={cleanSchedule}></TueProgram>
      <WedProgram cleanSchedule={cleanSchedule}></WedProgram>
      <ThuProgram cleanSchedule={cleanSchedule}></ThuProgram>
      <FriProgram cleanSchedule={cleanSchedule}></FriProgram>
      <SatProgram cleanSchedule={cleanSchedule}></SatProgram>
      <SunProgram cleanSchedule={cleanSchedule}></SunProgram>
    </main>
  );
}
