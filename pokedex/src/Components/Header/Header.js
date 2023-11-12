import { ContainerHeader } from "./HeaderStyle";

export const Header = () => {
  return (
    <ContainerHeader>
      <p>Voltar para Lista/Home</p>
      <img src="https://picsum.photos/300/100" alt="imagem logo Pokedex" />
      <button>Pokedex</button>
      <button>Excluir/Adicionar Detelhe</button>
    </ContainerHeader>
  );
};
