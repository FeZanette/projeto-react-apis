import {
  ButtonPokemonCard,
  ContainerButtonPokemonCard,
  ContainerImagePokemonCard,
  ContainerPokemonCard,
  ContainerTypes,
  ContainerTypesPokemonCard,
  IdPokemonCard,
  ImagePokemonCard,
  ImageTypesPokemonCard,
  NamePokemonCard,
  TypesPokemonCard,
} from "./PokemonCardStyle";
import axios from "axios";

export const PokemonCard = ({ name, url, pokemon, setPokemons }) => {
  const pokemonId = url.split("/").slice(-2, -1)[0];

  const pokemonsData = async () => {
    try {
      const response = await axios.get(url);
      setPokemons(response.data);
    } catch (error) {
      console.log("Error pokemonsData:", error.response);
    }
  };

  return (
    <ContainerPokemonCard>
      <IdPokemonCard>
        # {pokemonId < 10 ? `0${pokemonId}` : pokemonId}
      </IdPokemonCard>
      <NamePokemonCard>{pokemon.name}</NamePokemonCard>
      <ContainerTypesPokemonCard>
        <ImageTypesPokemonCard>types</ImageTypesPokemonCard>
      </ContainerTypesPokemonCard>
      <ContainerImagePokemonCard>
        <ImagePokemonCard
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png"
          alt="Imagem do pokemon"
        />
      </ContainerImagePokemonCard>
      <ContainerButtonPokemonCard>
        <button>
          <u>Detalhes</u>
        </button>
        <button>Capturar!</button>
      </ContainerButtonPokemonCard>
    </ContainerPokemonCard>
  );
};
