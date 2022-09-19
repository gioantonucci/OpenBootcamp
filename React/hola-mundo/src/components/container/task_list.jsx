import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";
const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Description1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description3",
    true,
    LEVELS.BLOCKING
  );

  //Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componetne
  useEffect(() => {
    //console.log("Task State has been modified");
    setLoading(false);
    return () => {
      // console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this task: ", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];

    tempTask[index].completed = !tempTask[index].completed;

    //actualizamos el estado del componente, esto actualiza la iteracion de las tareas en
    //orden para mostrarlas actualizadas
    setTasks(tempTask);
  }

  function removeTask(task) {
    console.log("Delete this task: ", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];

    tempTask.splice(index, 1);

    setTasks(tempTask);
  }

  function addTask(task) {
    console.log("Add this task: ", task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/**Card header (title) */}
          <div className="card-header p-3">
            <h5>Your tasks:</h5>
          </div>
          {/**Card Bpdy (content) */}
        </div>
        <div
          className="card-body"
          data-mbd-perfect-scrollbar="true"
          style={{ position: "relative", height: "400px" }}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, i) => {
                return (
                  <TaskComponent
                    key={i}
                    task={task}
                    complete={completeTask}
                    remove={removeTask}
                    add={addTask}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <TaskForm add={addTask}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
