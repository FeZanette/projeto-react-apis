import styled from "styled-components";


export const ContainerHeader = styled.div`
    padding: 2vh 5vh;
    background-color: #FFFFFF;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 15vh;

    img {
        /* height: 10vh; */
        grid-column: 2 / 3;
        justify-self: center;
        width: 307px;
        height: 113px;
        top: 21px;
        left: 566px
    }
`
export const ButtonPokedex = styled.button`
    grid-column: 3 / 4;
    border: none;
    color: #fff;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 2.3vh;
    height: 7vh;
    border-radius: 8px;
    background-color: #33a4f5;
    padding: 1vh 6vh;
    margin-left: auto;
    align-items: center;
`
export const ButtonBack = styled.button`
    grid-column: 1 / 2;  
    grid-row: 1 / 2 ;
    border: none;
    background: none;
    color: #1a1a1a;
    font-family: 'Poppins';
    font-size: 2.5vh;
    font-style: nomal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    justify-items: start;
`


