import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { MdStarBorder, MdStar, MdAddCircleOutline } from "react-icons/md";

import { Tag } from "../../components/Tags";




export const Home = () => {
  return (
    <Page>
      <Header></Header>
      <div className="flex w-full items-center justify-between mt-8 px-36">
        <h1 className="text-3xl text-white font-bold">Meus Filmes</h1>
        <Button icon={MdAddCircleOutline}>
          <span>Adicionar filme</span>
        </Button>
      </div>
      <Main className="overflow-y-scroll space-y-4">
        <div className="flex flex-col gap-2 bg-zinc-800 rounded-lg w-full p-6">
          <h1 className="text-2xl text-white">Interestellar</h1>
          <div className="flex gap-2 text-xs items-center">
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStarBorder className="text-rose-500"></MdStarBorder>
          </div>
          <div className="max-h-12 overflow-hidden">
            <p className="text-stone-400">
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se comunicar com ela. Pai e
              filha descobrem que o "fantasma" é uma inteligência desconhecida
              que está enviando mensagens codificadas através de radiação
              gravitacional, deixando coordenadas em binário que os levam até
              uma instalação secreta da NASA liderada pelo professor John Brand.
              O cientista revela que um buraco de minhoca foi aberto perto de
              Saturno e que ele leva a planetas que podem oferecer condições de
              sobrevivência para a espécie humana. As "missões Lázaro" enviadas
              anos antes identificaram três planetas potencialmente habitáveis
              orbitando o buraco negro Gargântua: Miller, Edmunds e Mann –
              nomeados em homenagem aos astronautas que os pesquisaram. Brand
              recruta Cooper para pilotar a nave espacial Endurance e recuperar
              os dados dos astronautas; se um dos planetas se mostrar habitável,
              a humanidade irá seguir para ele na instalação da NASA, que é na
              realidade uma enorme estação espacial. A partida de Cooper devasta
              Murphy. Além de Cooper, a tripulação da Endurance é formada pela
              bióloga Amelia, filha de Brand; o cientista Romilly, o físico
              planetário Doyle, além dos robôs TARS e CASE. Eles entram no
              buraco de minhoca e se dirigem a Miller, porém descobrem que o
              planeta possui enorme dilatação gravitacional temporal por estar
              tão perto de Gargântua: cada hora na superfície equivale a sete
              anos na Terra. Eles entram em Miller e descobrem que é inóspito já
              que é coberto por um oceano raso e agitado por ondas enormes. Uma
              onda atinge a tripulação enquanto Amelia tenta recuperar os dados
              de Miller, matando Doyle e atrasando a partida. Ao voltarem para a
              Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <Tag isCreate name="Ficçao cientifica"></Tag>
            <Tag isCreate name="Aventura"></Tag>
          </div>
        </div>
        
      </Main>
    </Page>
  );
};
