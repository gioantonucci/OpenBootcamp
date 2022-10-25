import "./App.css";

function App() {
  /*Un método para que cuando el ratón entre en el contenedor,
  se dará un valor aleatorio (color RGB entre 0 y 255)
  para cambiar el color del componente.
 */

  /*Un método para que cuando salga el ratón del componente se detenga
 por completo el cambio de color.
 */

  /*Por último, un método en el que cuando se pulsa dos veces en el componente, 
   se tiene que detener el cambio de color.
 */

  return (
    <div className="App">
      <header className="App-header">
        <div id="canvas"></div>
      </header>
    </div>
  );
}

export default App;
