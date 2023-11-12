import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ButtonBack, ButtonPokedex, ContainerHeader } from "./HeaderStyle";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import { FiChevronLeft } from "react-icons/fi";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const pathParams = useParams();

  const ShowButtonPokedex = () => {
    return (
      <ButtonPokedex
        onClick={() => {
          goToPokedex(navigate);
        }}
      >
        Pokedex
      </ButtonPokedex>
    );
  };

  const ShowButtonBack = () => {
    return (
      <ButtonBack
        onClick={() => {
          if (pathname === "/details") {
            goToHome(navigate);
          } else {
            goToHome(navigate)
          }
        }}
      >
        <FiChevronLeft />
        Todos os Pokemons
      </ButtonBack>
    );
  };

  const ShowAddRemoveButton = () => {
    // Adicione a lógica aqui para determinar se o botão deve ser de adicionar ou remover
    const isAddButton = true; // Substitua isso com a lógica real
    const buttonText = isAddButton ? "Adicionar à Pokedex" : "Remover da Pokedex";

    return (
      <button
        onClick={() => {
          // Adicione a lógica aqui para adicionar/remover Pokémon da Pokedex
          // Você pode usar as informações do local atual (pathname, pathParams) para decidir qual Pokémon está sendo referenciado
        }}
      >
        {buttonText}
      </button>
    );
  };

  
  return (
    <ContainerHeader>
      {/* <p>Voltar para Lista/Home</p> */}
      <img src="https://picsum.photos/300/100" alt="imagem logo Pokedex" />
      {pathname === "/" ? ShowButtonPokedex() : ""}
      {pathname === "/pokedex" ? ShowButtonBack() : ""}
      {pathname === "/details" ? ShowButtonBack() : ""}
      <button>Excluir/Adicionar da Pokedex</button>
    </ContainerHeader>
  );
};
