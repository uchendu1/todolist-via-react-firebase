import { useState } from "react";
import "./AppendTask.css";

export const AppendTask = ({ list, setList }) => {
  const [input, setInput] = useState({
    task: "",
    due: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.task || !input.due) {
      return;
    }

    setList([
      ...list,
      {
        Task: input.task,
        Due: input.due,
      },
    ]);

    setInput({
      task: "",
      due: "",
    });
  };

  return (
    <div className="AppendTask">
      <input
        type="text"
        placeholder="Input Tasks..."
        value={input.task}
        className="AppendTask-input"
        onChange={handleChange}
        name="task"
      />
      <label for="task">due date:</label>
      <input
        type="datetime-local"
        placeholder="Due Date"
        value={input.due}
        className="AppendTask-input"
        onChange={handleChange}
        name="due"
      />
      
      <button className="AppendTask-btn" onClick={handleClick}>
        Add To Task
      </button>
    </div>
  );
};
