import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(["EAT", "SLEEP", "REPEAT"]);

  const showList = task.map((tasks, index) => {
    return (
      <div className="flex flex-row justify-around align-middle text-left my-2 border-2 border-black p-2">
        <label
          htmlFor={"task" + index}
          key={"task-" + index}
          id={"task-" + index}
          className="align-middle font-extrabold  text-2xl"
        >
          {tasks + " "}
        </label>

        <div>
          <button
            className="bg-red-700 hover:bg-red-400 hover:bg-bold active:bg-red-900 text-white p-1"
            id={"delete-" + index}
            onClick={() => deleteFunction(index)}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 hover:bg-bold active:bg-blue-900 text-white p-1"
            id={"up-" + index}
            onClick={() => moveTaskUp(index)}
          >
            👆
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 hover:bg-bold active:bg-blue-900 text-white p-1"
            id={"down-" + index}
            onClick={() => moveTaskDown(index)}

          >
            👇
          </button>
        </div>
      </div>
    );
  });

  function addElements() {
    var taskValue = document
      .getElementById("inputbox")
      .value.toUpperCase()
      .trim();

    if (taskValue === "") {
      alert("Please enter a value");
      return;
    } else {
      setTask((t) => [...t, taskValue]);
      document.getElementById("inputbox").value = ""; // Clear the input box after adding
    }
  }

  function deleteFunction(index) {
    setTask((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  }

  // Function to move a task up
  function moveTaskUp(index) {
    if (index === 0) return; // Can't move the first item up
    setTask((prevTasks) => {
      const newTasks = [...prevTasks];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]]; // Swap tasks
      return newTasks;
    });
  }
  function moveTaskDown(index) {

    if (index === task.length - 1) return; // Can't move the last item down
    setTask((prevTasks) => {
      const newTasks = [...prevTasks];
      [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]]; // Swap tasks
      return newTasks;
    });
  }

  return (
    <>
      <h1 className="text-5xl font-bold  underline my-5 text-center">
        To-Do-List
      </h1>

      <input
        id="inputbox"
        type="text"
        placeholder="Enter Task"
        className="h-auto w-60 p-4 mb-5"
      />
      <button
        id="buttonbox"
        htmlFor="inputbox"
        onClick={addElements}
        className="h-auto p-4  bg-red-700 hover:bg-red-400 active:bg-red-950 text-white font-bold"
      >
        ADD
      </button>

      {/* Conditional rendering based on the length of the task array */}
      {task.length > 0 && (
        <div
          id="appbox"
          className="bg-white h-auto w-auto rounded-md p-8 text-center"
        >
          <ul>{showList}</ul>
        </div>
      )}
    </>
  );
}

export default App;
