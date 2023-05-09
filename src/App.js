import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AxiosPokemon from "./components/AxiosPokemon";
// import FetchPokemon from "./components/FetchPokemon";

function App() {
  return (
    <div className="App">
      <h1>Who's That Pokemon?</h1>
      {/* <FetchPokemon /> */}
      <AxiosPokemon />
    </div>
  );
}

export default App;
