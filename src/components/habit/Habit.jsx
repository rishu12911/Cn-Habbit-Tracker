import "./habit.scss";

const Habit = ({ habit, index, changeHabitStatus }) => {
  const habitName = Object.keys(habit)[0];
  const statusArray = habit[habitName];

  const formatDate = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = mm + "/" + dd + "/" + yyyy;
    return date;
  };

  let dates = [];
  for (let i = 6; i >= 0; i--) {
    let d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(formatDate(d));
  }

  const colorClass = ["not-done", "untracked", "done"];

  const name = Object.keys(habit)[0];
  const dailyTrack = habit[name];
  const doneCount = dailyTrack.filter((x) => x === 1).length;
  const notDoneCount = dailyTrack.filter((x) => x === -1).length;

  return (
    <div className="habit">
      <h2 className="habit-heading">
        {habitName.toUpperCase()}
        {/* <br /> */}
        {doneCount > 3 && (
          <span style={{ color: "green" }}> - Good Job, keep going.</span>
        )}
        {notDoneCount > 3 && (
          <span style={{ color: "red" }}> - Lagging behind, step up!</span>
        )}
      </h2>
      <div className="daily-status">
        {dates.map((day, i) => (
          <div
            className={"day " + colorClass[statusArray[i] + 1]}
            key={i}
            onClick={() => changeHabitStatus(habit, index, i)}
          >
            <div className="date">{day}</div>
            <div className="status">
              {statusArray[i] === -1 ? (
                <span>Not Done ✖ </span>
              ) : statusArray[i] === 0 ? (
                <span>Untracked ❔</span>
              ) : (
                <span>Done ✔ </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Habit;
