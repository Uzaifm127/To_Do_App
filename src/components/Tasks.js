import React from "react";

function Tasks(props) {
  return (
    <label className="tasks" onClick={props.taskRemEvent}>
      {props.task}
    </label>
  );
}

export default Tasks;
