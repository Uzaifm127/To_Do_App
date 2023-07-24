import { useState } from "react";
import "./App.css";
import TaskWriter from "./components/TaskWriter";
import Tasks from "./components/Tasks";

const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

function App() {
  const date = new Date();
  const [value, setValue] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [currentDay, setDay] = useState();
  const [currentMonth, setMonth] = useState();

  const addTask = (e) => {
    if (value !== "") {
      setTaskArr((previousArr) => [...previousArr, value]);
      setValue("");
    } else {
      return;
    }
  };

  const removeEvent = (e) => {
    const rIndex = taskArr.indexOf(e.target.innerText);
    setTaskArr((oldArr) => oldArr.filter((elem, index) => index !== rIndex));
  };

  const addTaskEnter = (e) => {
    if (e.key === "Enter" && value !== "") {
      setTaskArr((previousArr) => [...previousArr, value]);
      setValue("");
    }
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  setInterval(() => {
    setDay(days[date.getDay()]);
    setMonth(months[date.getMonth()]);
  }, 3600);
  return (
    <>
      <div id="appContainer" onKeyDown={addTaskEnter}>
        <div id="currentDate">
          {currentDay}, {currentMonth} {date.getFullYear()}
        </div>
        <div id="titleContainer">
          <h2 id="title">To Do List</h2>
        </div>
        <div id="taskContainer">
          {/* {taskArr} */}
          {taskArr.map((element, index) => (
            <Tasks task={element} key={index} taskRemEvent={removeEvent} />
          ))}
        </div>
        <TaskWriter onChangeEvent={handleValue} inpValue={value} />
        <div id="btnContainer">
          <button id="addBtn" type="button" onClick={addTask}>
            Add now
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
