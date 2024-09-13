import { useState, useRef } from "react";
import "./App.css";

// TaskItem Component for rendering individual tasks
const TaskItem = ({ task, index, onDelete, onMoveUp, onMoveDown, isFirst, isLast }) => (
  <div
    key={index} // Use key here for the outermost element
    className="flex flex-row justify-between items-center my-2 border-2 border-black p-2"
  >
    <label
      htmlFor={"task" + index}
      id={"task-" + index}
      className="font-extrabold text-2xl"
    >
      {task}
    </label>

    <div>
      <button
        className="bg-red-700 hover:bg-red-400 active:bg-red-900 text-white p-1 mx-1"
        onClick={() => onDelete(index)}
      >
        Delete
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-400 active:bg-blue-900 text-white p-1 mx-1 ${isFirst ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => onMoveUp(index)}
        disabled={isFirst}
      >
        👆
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-400 active:bg-blue-900 text-white p-1 mx-1 ${isLast ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => onMoveDown(index)}
        disabled={isLast}
      >
        👇
      </button>
    </div>
  </div>
);

function App() {
  const [tasks, setTasks] = useState(["EAT", "SLEEP", "REPEAT"]);
  const inputRef = useRef();

  // Function to add a new task
  function addTask() {
    const taskValue = inputRef.current.value.toUpperCase().trim();
    if (taskValue === "") {
      alert("Please enter a value");
      return;
    } else {
      setTasks((prevTasks) => [...prevTasks, taskValue]);
      inputRef.current.value = ""; // Clear the input box after adding
    }
  }

  // Function to delete a task by index
  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  // Function to move a task up
  function moveTaskUp(index) {
    if (index === 0) return; // Can't move the first item up
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]]; // Swap tasks
      return newTasks;
    });
  }

  // Function to move a task down
  function moveTaskDown(index) {
    if (index === tasks.length - 1) return; // Can't move the last item down
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]]; // Swap tasks
      return newTasks;
    });
  }

  return (
    <>
      <h1 className="text-5xl font-bold underline my-5 text-center">To-Do-List</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Task"
        className="h-auto w-60 p-4 mb-5"
      />
      <button
        onClick={addTask}
        className="h-auto p-4 bg-red-700 hover:bg-red-400 active:bg-red-950 text-white font-bold"
      >
        ADD
      </button>

      {/* Conditional rendering based on the length of the tasks array */}
      {tasks.length > 0 && (
        <div className="bg-white h-auto w-auto rounded-md p-8 text-center">
          <ul>
            {tasks.map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                index={index}
                onDelete={deleteTask}
                onMoveUp={moveTaskUp}
                onMoveDown={moveTaskDown}
                isFirst={index === 0}
                isLast={index === tasks.length - 1}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
