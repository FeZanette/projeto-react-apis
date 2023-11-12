import { Header } from "../../Components/Header/Header";

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <div>
        <p>Página não encontrada!</p>
        <img
          alt="imagem de página não encontrada"
          src="https://picsum.photos/200"
        />
      </div>
    </>
  );
};
