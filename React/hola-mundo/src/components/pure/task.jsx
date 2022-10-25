import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

function TaskComponent({ task, complete, remove }) {
  useEffect(() => {
    console.log("Created task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  //funcion q retorna un badge dependiendo del nivel de la tarea
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0 ">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }
  //FUNCION QUE RETORNA UN ICONO DEPENDINEDO DE LA COMPLETITUD DE LA TAREA
  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-on task-action"
          style={{
            color: "green",
          }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-off task-action"
          style={{
            color: "grey",
          }}
        ></i>
      );
    }
  }

  const taskCompleted = {
    color: "grey",
    textDecoration: "line-through",
    fontWeight: "bold",
  };
  const taskPending = {
    color: "tomato",
    fontWeight: "bold",
  };

  return (
    <tr
      className="fw-normal"
      style={task.completed ? taskCompleted : taskPending}
    >
      <th>
        <span className="">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        <span>{taskLevelBadge()}</span>
      </td>
      <td className="align-middle">
        {taskCompletedIcon()}
        <i
          className="bi-trash task-action"
          onClick={() => remove(task)}
          style={{
            color: "tomato",
          }}
        ></i>
      </td>
    </tr>
  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  completed: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
