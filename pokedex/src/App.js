import { Header } from "./Components/Header/Header";
import { Router } from "./routes/router";
import { PokedexPage } from "./Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "./Pages/PokemonDetailPage/PokemonDetailPage";
import { PokemonListPage } from "./Pages/PokemonListPage/PokemonListPage";

function App() {
  return (
    <div>
      {/* <h1>Pokedex</h1> */}
      {/* <Router /> */}
      <p>
        {/* <PokedexPage /> */}
      </p>
      {/* <p><PokemonDetailPage /></p> */}
      <p><PokemonListPage /></p>
    </div>
  );
}

export default App;
