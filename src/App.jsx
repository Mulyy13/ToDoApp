import "./App.scss";
import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [tasks, addTask] = useState([]);
  // const [completed, setStatus] = useState(false);

  function AddTask() {
    const task = {
      id: Math.floor(Math.random() * 1000),
      value: inputValue,
      // status: completed,
    };

    if (inputValue) {
      addTask((tasks) => [...tasks, task]);
      setinputValue("");
      console.log(tasks);
    }
    // if (task === ) {}
    else return alert("Wprowadź zadanie");
  }

  return (
    <div className="app-wrapper">
      <div className="app-wrapper__app">
        <div className="app__input-admit">
          <input
            className="app__input-admit--input"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            placeholder={"Wpisz zadanie"}
          ></input>
          <button
            className="app__input-admit--admit"
            type="submit"
            onClick={() => AddTask()}
          >
            +
          </button>
        </div>
        <ul className="app__tasks-container">
          {tasks.map((task) => {
            return (
              <li key={task.id} className={"tasks-container__task"}>
                {task.value}

                <GiCheckMark
                  className="tasks-container__check"
                  onClick={(e) => {
                    // setStatus(!completed);
                    console.log(task.id);
                    const newTasks = tasks.filter((item) => {
                      return item.id !== task.id;
                    });
                    addTask(newTasks);
                    console.log(newTasks);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
