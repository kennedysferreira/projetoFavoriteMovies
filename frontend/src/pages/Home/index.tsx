import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { GoPlusCircle } from "react-icons/go";

export const Home = () => {
  return (
    <Page>
      <Header></Header>
      <Main>
        <div className="flex w-full items-center justify-between p-4">
          <h1 className="text-3xl text-white font-bold">Meus Filmes</h1>
          <Button icon={GoPlusCircle}>
            <span>Adicionar filme</span>
          </Button>
        </div>
      </Main>
    </Page>
  );
};
