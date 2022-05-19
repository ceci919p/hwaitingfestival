export default function DayFilter({ setDayFilter }) {
  return (
    <div id="day-filter">
      <select name="day_options">
        <option onClick={() => setDayFilter("All Days")} value={"All Days"}>
          All Days
        </option>
        <option onClick={() => setDayFilter("mon")} value={"mon"}>
          Monday
        </option>
        <option onClick={() => setDayFilter("tue")} value="tue">
          Tuesday
        </option>
        <option onClick={() => setDayFilter("wed")} value="wed">
          Wednesday
        </option>
        <option onClick={() => setDayFilter("thu")} value="thu">
          Thursday
        </option>
        <option onClick={() => setDayFilter("fri")} value="fri">
          Friday
        </option>
        <option onClick={() => setDayFilter("sat")} value="sat">
          Saturday
        </option>
        <option onClick={() => setDayFilter("sun")} value="sun">
          Sunday
        </option>
      </select>
    </div>
  );
}
