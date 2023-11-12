import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { ContainerPokedexList, ContainerPokedexPage } from "./PokedexPageStyle";

export const PokedexPage = () => {
  return (
    <>
      <Header />
      <ContainerPokedexPage>
        <h1>Pokedex - Meus Pokemons</h1>
        <ContainerPokedexList>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </ContainerPokedexList>
      </ContainerPokedexPage>
      <h1>Pokedex Page</h1>
    </>
  );
};
