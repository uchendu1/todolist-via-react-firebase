import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { AppendTask } from "./components/AppendTask";

function App() {
  const dueDate =
    '<input type="datetime-local" id="task" name="task">';

  const [list, setList] = useState([
    {
      Task: "template......",
      Due: dueDate,
      Delete: "delete",
    },
  ]);
  return (
    <div className="App">
      <h4 className="header">Plan Your Day With Linda 👱‍♀️</h4>

      <TodoList items={list} setList={setList} />
      <AppendTask list={list} setList={setList} />
    </div>
  );
}

export default App;
