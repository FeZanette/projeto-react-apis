import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import {
  ContainerPokemonListCard,
  ContainerPokemonListPage,
} from "./PokemonListPageStyle";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";

export const PokemonListPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const response = await axios.get(`${BASE_URL}pokemon`);
        const pokemonList = response.data.results.slice(0, 20);
        setPokemons(pokemonList);
      } catch (error) {
        console.log("Error fetching pokemons:", error);
      }
    };
    getAllPokemons();
  }, []);

  // const getAllPokemons = async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}pokemon`);
  //     const data = response.data.results.slice(0,20);
  //     setPokemons(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllPokemons();
  // }, []);

  console.log("pokemons:", pokemons);
  return (
    <>
      <Header />
      <ContainerPokemonListPage>
        <h1>Todos os Pokemons</h1>

        <ContainerPokemonListCard>
          {/* {pokemons.length === 0 ? (<p>Carregando...</p>) : (pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} />
          )))} */}
          {pokemons.map((pokemon, index) => (
            <div key={index}>
              <PokemonCard
                name={pokemon.name}
                url={pokemon.url}
                pokemon={pokemon}
                setPokemons={setPokemons}
              />
            </div>
          ))}
        </ContainerPokemonListCard>
      </ContainerPokemonListPage>
    </>
  );
};
