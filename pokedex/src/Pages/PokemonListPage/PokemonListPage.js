import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { ContainerPokemonListCard, ContainerPokemonListPage } from "./PokemonListPageStyle";

export const PokemonListPage = () => {
  return (
    <>
      <Header />
      <ContainerPokemonListPage>
        <h1>Pokedex List Page - Todos os Pokemons</h1>
        <ContainerPokemonListCard>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </ContainerPokemonListCard>
      </ContainerPokemonListPage>
    </>
  );
};
