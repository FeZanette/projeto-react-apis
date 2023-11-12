import { Header } from "../../Components/Header/Header";
import { ContainerAllStats, ContainerImgBack, ContainerImgFront, ContainerImgMain, ContainerImgTypeDetails, ContainerImgs, ContainerListCardDetail, ContainerListCardDetails, ContainerMiniImages, ContainerMoves, ContainerPokemonDetailPage, ContainerTypes, TitleStats } from "./PokemonDetailPageStyle";

export const PokemonDetailPage = () => {
  return (
    <>
      <Header />
      <ContainerPokemonDetailPage>
        <h1>Detalhes</h1>
        <ContainerListCardDetails>
          <ContainerMiniImages>
            <ContainerImgFront>
              <ContainerImgs alt="" src="image front" />
            </ContainerImgFront>
            <ContainerImgBack>
              <ContainerImgs alt="" src="image back" />
            </ContainerImgBack>
          </ContainerMiniImages>
          <ContainerAllStats>
            <TitleStats>TitleStats</TitleStats>
          </ContainerAllStats>
          <ContainerImgMain>
            <img alt="" src="Imagem Pokemon" />
          </ContainerImgMain>
          <ContainerTypes>
            <p>id</p>
            <p>name</p>
            <ContainerImgTypeDetails>
              <img alt="" src="TypeDetails" />
            </ContainerImgTypeDetails>
          </ContainerTypes>
          <ContainerMoves>
            <p>Moves</p>
          </ContainerMoves>
        </ContainerListCardDetails>
      </ContainerPokemonDetailPage>
    </>
  );
};
