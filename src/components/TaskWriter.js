import React from "react";

function TaskWriter(props) {
  return (
    <input
      className="taskWriter"
      type="text"
      placeholder='add task...'
      onChange={props.onChangeEvent}
      value={props.inpValue}
    />
  );
}

export default TaskWriter;
