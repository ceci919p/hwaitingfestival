export default function DayFilter({ setDayFilter }) {
  function handleChange(event) {
    // console.log(event.target.value);
    setDayFilter(event.target.value);
  }

  return (
    <select id="day-filter" name="day_options" onChange={handleChange}>
      <option value={"All Days"}>All Days</option>
      <option value={"mon"}>Monday</option>
      <option value="tue">Tuesday</option>
      <option value="wed">Wednesday</option>
      <option value="thu">Thursday</option>
      <option value="fri">Friday</option>
      <option value="sat">Saturday</option>
      <option value="sun">Sunday</option>
    </select>

    /*     <select id="day-filter" name="day_options">
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
    </select> */
  );
}
