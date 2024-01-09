import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "../../redux/habitSlice";
import { changeWeekView } from "../../redux/weekViewSlice";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const weekView = useSelector((state) => state.weekView);
  const dispatch = useDispatch();

  const createNewHabit = () => {
    if (!input) {
      return;
    }
    let habitObject = {};
    habitObject[input] = [0, 0, 0, 0, 0, 0, 0];
    dispatch(addHabit(habitObject));
    setInput("");
    setOpen(false);
  };

  const updateWeekView = () => {
    dispatch(changeWeekView());
  };

  return (
    <div className="header">
      <div className="title">
        <h1>Weekly Tracker</h1>
      </div>
      <div className="options">
        <button onClick={updateWeekView}>
          {weekView ? "All Habits" : "Weekly View"}
        </button>
        <button onClick={() => setOpen(!open)}>Add new</button>
        {open && (
          <div className="add-habit">
            <input
              type="text"
              placeholder="Add a Habit..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
              required
            />
            <div>
              <button className="create-habit" onClick={createNewHabit}>
                Create
              </button>
              <button className="create-habit" onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
