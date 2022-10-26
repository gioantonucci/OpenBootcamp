import logo from "./logo.svg";
import "./App.css";
import { LEVELS } from "./levels.enum";
import { useRef } from "react";
import { Task } from "./task.class";

function App() {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  const normalStyle = {
    color: "blue",
    fontWeight: "bold",
  };
  const urgentStyle = {
    color: "yellow",
    fontWeight: "bold",
  };
  const blockStyle = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={addTask}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <div className="form-outline flex-fill">
            <input
              ref={nameRef}
              id="inputName"
              type="text"
              className="form-control form-control-lg"
              placeholder="Task Name"
              required
              autoFocus
            />
            <input
              ref={descriptionRef}
              id="inputDescription"
              type="text"
              className="form-control form-control-lg"
              placeholder="Task Description"
              required
            />

            <select
              className="form-control form-control-lg"
              ref={levelRef}
              defaultValue={LEVELS.NORMAL}
              id="selectLevel"
            >
              <option style={normalStyle} value={LEVELS.NORMAL}>
                Normal
              </option>
              <option style={urgentStyle} value={LEVELS.URGENT}>
                Urgent
              </option>
              <option style={blockStyle} value={LEVELS.BLOCKING}>
                Blocking
              </option>
            </select>
            <button type="submit" className="btn btn-success btn-lg ms-1">
              {length > 0 ? "Add New Task" : "Create your first task"}
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}
TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default App;
