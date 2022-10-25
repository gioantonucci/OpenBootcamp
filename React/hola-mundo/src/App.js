import TaskListComponent from "./components/container/task_list";
import './App.css'
import RegisterFormik from "./components/pure/forms/registerFormik";



function App() {
  return (
    <div>
      <TaskListComponent />
    <RegisterFormik></RegisterFormik>
    </div>
  );
}

export default App;
