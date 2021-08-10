import "./App.css";
import TODO from "./todo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
      </header>
      <article>
        <TODO text="Hello" />
        <TODO text="React" />
        <TODO text="World" />
      </article>
    </div>
  );
}

export default App;
