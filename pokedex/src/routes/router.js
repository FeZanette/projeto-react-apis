import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { PokemonListPage } from "../Pages/PokemonListPage/PokemonListPage";
import { Header } from "../Components/Header/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:name" element={<PokemonDetailPage />} />
        <Route path="/" element={<PokemonListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
