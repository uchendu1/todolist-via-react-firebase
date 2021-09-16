import { useState, useEffect } from "react";
import { collection, onSnapshot } from "@firebase/firestore";

import "./App.css";
import { TodoList } from "./components/TodoList";
import { AppendTask } from "./components/AppendTask";
import db from "./firebase";

// db.collection("name").add({
//   name: "linda",
//   age: 12,
// });

const App = () => {
  useEffect(
    () =>
      onSnapshot(collection, (db, "tasks"), (snapshot) =>
      // console.log(snapshot)
        setList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const dueDate = '<input type="datetime-local" id="task" name="task">';

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
};

export default App;
