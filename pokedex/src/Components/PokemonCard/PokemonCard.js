import { ButtonPokemonCard, ContainerPokemonCard } from "./PokemonCardStyle";

export const PokemonCard = () => {
  return (
    <ContainerPokemonCard>
      <p>id</p>
      <p>nome</p>
      <p>tipo</p>
      <p>imagem</p>
      <ButtonPokemonCard>
        <button>botão detalhes</button>
        <button>botão capturar</button>
      </ButtonPokemonCard>
    </ContainerPokemonCard>
  );
};
