import { useDispatch, useSelector } from "react-redux";
import Habit from "../../components/habit/Habit";
import { updateHabit } from "../../redux/habitSlice";
import "./home.scss";

const Home = () => {
  const habits = useSelector((state) => state.habit.habits);
  const weekView = useSelector((state) => state.weekView);
  const dispatch = useDispatch();

  console.log(habits);

  const changeHabitStatus = (habit, habitIndex, dayIndex) => {
    const trackArray = [...Object.values(habits[habitIndex])[0]];
    if (trackArray[dayIndex] === -1) {
      trackArray[dayIndex] = 0;
    } else if (trackArray[dayIndex] === 0) {
      trackArray[dayIndex] = 1;
    } else if (trackArray[dayIndex] === 1) {
      trackArray[dayIndex] = -1;
    }
    dispatch(
      updateHabit({
        index: habitIndex,
        newArray: trackArray,
        habitName: Object.keys(habit)[0],
      })
    );
  };

  return (
    <div className="home">
      {habits.length > 0 ? (
        <div>
          {weekView ? (
            <div className="daily-view">
              {habits.map((habit, index) => {
                return (
                  <div className="habits-container" key={index}>
                    <Habit
                      habit={habit}
                      index={index}
                      changeHabitStatus={changeHabitStatus}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="all-habits">
              {habits?.map((habit, index) => {
                const name = Object.keys(habit)[0];
                const dailyTrack = habit[name];
                const done = dailyTrack.filter((x) => x === 1).length;
                const skipped = dailyTrack.filter((x) => x === -1).length;
                const untracked = dailyTrack.filter((x) => x === 0).length;

                return (
                  <div className="habit-card" key={index}>
                    <h1>{name}</h1>
                    <div>
                      <p style={{ color: "green" }}>Done ✔ : {done} </p>
                      <p style={{ color: "red" }}>Skipped ✖ : {skipped}</p>
                      <p>Untracked ❔ : {untracked}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <h2 style={{ margin: 20 }}>
          No habits to show. Add habits to continue.
        </h2>
      )}
    </div>
  );
};

export default Home;
