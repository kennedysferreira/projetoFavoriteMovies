import {
  MdAccessTime,
  MdArrowBack,
  MdStar,
  MdStarBorder,
} from "react-icons/md";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Page } from "../../components/Page";
import { Tag } from "../../components/Tags";
import { Link } from "react-router-dom";

export const MoviePreview = () => {
  return (
    <Page>
      <Header></Header>
      <Link to={"/"}>
        <ButtonText
          className="mt-8 px-36"
          icon={MdArrowBack}
          name={"Back"}
        ></ButtonText>
      </Link>
      <Main className="overflow-y-scroll space-y-10">
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl text-white font-bold">Interstellar</h1>
          <div className="flex">
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStarBorder className="text-rose-500"></MdStarBorder>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-white ">
          <img
            className="w-3 h-3 rounded-full"
            src="https://github.com/kennedysferreira.png"
            alt="profile"
          />
          <span>by Kennedy Ferreira</span>
          <MdAccessTime className="text-rose-400" />
          <data> 01/01/2024 às 08:00 </data>
        </div>
        <div className="flex gap-4  text-white">
          <Tag isCreate name={"Science fiction"}></Tag>
          <Tag isCreate name={"Adventure"}></Tag>
        </div>
        <div className="mx-4 text-white text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            accusantium ullam quisquam, nostrum est saepe recusandae, fugiat
            reprehenderit dicta earum aperiam natus possimus nisi quibusdam quos
            ratione id vitae dolorem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Facilis sapiente laboriosam doloremque veritatis
            in hic ratione quidem totam eveniet facere modi placeat culpa eum
            reprehenderit, voluptates voluptatibus! Nam, repudiandae eaque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            accusantium ullam quisquam, nostrum est saepe recusandae, fugiat
            reprehenderit dicta earum aperiam natus possimus nisi quibusdam quos
            ratione id vitae dolorem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Facilis sapiente laboriosam doloremque veritatis
            in hic ratione quidem totam eveniet facere modi placeat culpa eum
            reprehenderit, voluptates voluptatibus! Nam, repudiandae eaque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            accusantium ullam quisquam, nostrum est saepe recusandae, fugiat
            reprehenderit dicta earum aperiam natus possimus nisi quibusdam quos
            ratione id vitae dolorem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Facilis sapiente laboriosam doloremque veritatis
            in hic ratione quidem totam eveniet facere modi placeat culpa eum
            reprehenderit, voluptates voluptatibus! Nam, repudiandae eaque.{" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            accusantium ullam quisquam, nostrum est saepe recusandae, fugiat
            reprehenderit dicta earum aperiam natus possimus nisi quibusdam quos
            ratione id vitae dolorem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Facilis sapiente laboriosam doloremque veritatis
            in hic ratione quidem totam eveniet facere modi placeat culpa eum
            reprehenderit, voluptates voluptatibus! Nam, repudiandae eaque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            accusantium ullam quisquam, nostrum est saepe recusandae, fugiat
            reprehenderit dicta earum aperiam natus possimus nisi quibusdam quos
            ratione id vitae dolorem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Facilis sapiente laboriosam doloremque veritatis
            in hic ratione quidem totam eveniet facere modi placeat culpa eum
            reprehenderit, voluptates voluptatibus! Nam, repudiandae eaque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            accusantium ullam quisquam, nostrum est saepe recusandae, fugiat
            reprehenderit dicta earum aperiam natus possimus nisi quibusdam quos
            ratione id vitae dolorem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Facilis sapiente laboriosam doloremque veritatis
            in hic ratione quidem totam eveniet facere modi placeat culpa eum
            reprehenderit, voluptates voluptatibus! Nam, repudiandae eaque.
          </p>
        </div>
      </Main>
    </Page>
  );
};
