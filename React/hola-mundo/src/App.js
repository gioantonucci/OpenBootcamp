import TaskListComponent from "./components/container/task_list";
import './App.css'
import OptionalRender from "./components/pure/OptionalRender";

function App() {
  return (
    <div>
      <OptionalRender/>
      <TaskListComponent />
      
    </div>
  );
}

export default App;
