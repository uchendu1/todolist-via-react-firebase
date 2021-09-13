import React from "react";
import "./TodoList.css";



export const TodoList = ({items, setList}) => {
    const renderTasks = () => {
        return items.map((item, id) => { 
          
          const removeTask = (index) => { // remove by index
            setList(prevState => {
                const tasks = [...prevState]; // create new array based on current tasks
                tasks.splice(index, 1); // remove task by index
                return tasks; // return altered array
            });
        }

          
            return (
                <div key={id} className="todolist">

                <p className="tasks">{item.Task}</p>
                <p className="duration" dangerouslySetInnerHTML={{__html: item.Due}}></p>
                <button className="delete" onClick={()=>removeTask(id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            )
        })
    }
  return (
   <div>{renderTasks()}</div>
  );
};
