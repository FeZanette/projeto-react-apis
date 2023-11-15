import { ButtonPokemonCard, ContainerPokemonCard } from "./PokemonCardStyle";

export const PokemonCard = (props) => {
  const { pokemon } = props

  return (
    <ContainerPokemonCard>
      <p>id</p>
      <p>{pokemon.name}</p>
      <p>types</p>
      <p>imagem</p>
      <ButtonPokemonCard>
        <button>botão detalhes</button>
        <button>botão capturar</button>
      </ButtonPokemonCard>
    </ContainerPokemonCard>
  );
};
