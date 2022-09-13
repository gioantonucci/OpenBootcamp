import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {


    const defaultTask = new Task('Example', 'This is an example of task', false, LEVELS.NORMAL)

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componetne
    useEffect(() => {
        console.log('Task State has beem modified')
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: cambiar state de la tarea')
        
    }

    return (
        <div>
            <div>
                <h1>Your tasks:</h1>
            </div>
            <div>
            {/* TODO: APLICAR MAP PARA RENDERIZAR LISTA DE TAREAS */}
                <TaskComponent task={defaultTask}/>
            </div>
        </div>
    );
};



export default TaskListComponent;
