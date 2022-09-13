import logo from "./logo.svg";
import "./App.css";
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import ComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <div>
         <TaskListComponent></TaskListComponent>
        </div> */}
        {/* <div>
          <h1>Ejemplos de Hooks</h1>
          <Ejemplo1></Ejemplo1>
          <Ejemplo2></Ejemplo2>
          <ComponenteConContexto></ComponenteConContexto>
          <Ejemplo4 nombre="Giovanna">
            <h3>Contenido del props.children</h3>
          </Ejemplo4>
        </div> */}
      </header>
    </div>
  );
}

export default App;
