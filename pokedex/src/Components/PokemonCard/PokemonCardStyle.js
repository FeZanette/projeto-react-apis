import styled from "styled-components";

export const ContainerPokemonCard = styled.div`
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;
    justify-content: center;
    margin: 3vh 3vh 6vh 3vh;
    padding: 2vh;
    width: 440px;
    height: 210px;
    border-radius: 12px;
    border: 2px solid black;
`
// import images from '../../assets/importImages';

// export const ContainerPokemonCard = styled.div`
//     display: grid;
//     width: 440px;
//     height: 210px;
//     border-radius: 12px;
//     justify-content: center;
//     background-color: ${({ color }) => color};
//     background-image: url(${images.pokeball});
//     background-repeat: no-repeat;
//     background-position: top right;
//     padding: 2vh;
//     margin: 3vh 3vh 6vh 3vh;
//     grid-template: 1fr 1fr 1fr 2fr / 1fr 1fr;
// `;

export const IdPokemonCard = styled.p`
    display: grid;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    font-family: Inter;
    font-weight: 700;
    font-style: normal;
    line-height: normal;
    font-size: 16px;
    color: #FFFFFF;
`

export const NamePokemonCard = styled.p`
    display: grid;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    font-family: Inter;
    font-weight: 700;
    font-style: normal;
    font-size: 32px;
    color: #FFFFFF;
    line-height: normal;
`

export const ContainerTypesPokemonCard = styled.div`
    display: flex;
    grid-row: 3 / 4;
    grid-column: 1 / 2;
`;

export const ImageTypesPokemonCard = styled.div`
    display: flex;
    padding: 5px 2px;
    align-items: flex-start;
    gap: 7px;
`

export const ContainerImagePokemonCard = styled.div`
    display: grid;
    grid-row: 1 / 4;
    grid-column: 2 / 3;
`;

export const ImagePokemonCard = styled.img`
    width: 193px;
    height: 193px;
    margin-top: -80px;
    margin-left: 20px;
`

export const ContainerButtonPokemonCard = styled.div`
    grid-row: 4 / 5;
    grid-column: 1 / 3;
    display: flex;
    align-items: end;
    justify-content: space-between;
`;