import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Task } from '../../models/task.class';

function TaskComponent({ task }) {

  useEffect(() => {
    console.log('Created task')
    return () => {
     console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);


  return (
    <div>
      <h2>Task: {task.name}</h2>
      <h3>Description: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>This task is {task.completed ? 'COMPLETED!' : 'PENDING...'}</h5>
    </div>
  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
