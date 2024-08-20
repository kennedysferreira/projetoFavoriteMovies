import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { MdStarBorder, MdStar, MdAddCircleOutline } from "react-icons/md";
import { Tag } from "../../components/Tags";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hook/auth";

export const Home = () => {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");

  function getMovies() {
    api.get('/notes')
    .then(response => {
      setMovies(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <Page>
      <Header></Header>
      <div className="flex w-full items-center justify-between mt-8 px-36">
        <h1 className="text-3xl text-white font-bold">My Movies</h1>
        <Link to={"/create"}>
          <Button icon={MdAddCircleOutline}>
            <span>Add movie</span>
          </Button>
        </Link>
      </div>
      <Main className="overflow-y-scroll space-y-4">
        <Link
          to={"/preview"}
          className="flex flex-col gap-2 bg-zinc-800 rounded-lg w-full p-6"
        >
          <h1 className="text-2xl text-white">Interstellar</h1>
          <div className="flex gap-2 text-xs items-center">
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStar className="text-rose-500"></MdStar>
            <MdStarBorder className="text-rose-500"></MdStarBorder>
          </div>
          <div className="max-h-12 overflow-hidden">
            <p className="text-stone-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              accusantium ullam quisquam, nostrum est saepe recusandae, fugiat
              reprehenderit dicta earum aperiam natus possimus nisi quibusdam
              quos ratione id vitae dolorem. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Facilis sapiente laboriosam
              doloremque veritatis in hic ratione quidem totam eveniet facere
              modi placeat culpa eum reprehenderit, voluptates voluptatibus!
              Nam, repudiandae eaque. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Eligendi accusantium ullam quisquam, nostrum est
              saepe recusandae, fugiat reprehenderit dicta earum aperiam natus
              possimus nisi quibusdam quos ratione id vitae dolorem. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Facilis sapiente
              laboriosam doloremque veritatis in hic ratione quidem totam
              eveniet facere modi placeat culpa eum reprehenderit, voluptates
              voluptatibus! Nam, repudiandae eaque. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eligendi accusantium ullam quisquam,
              nostrum est saepe recusandae, fugiat reprehenderit dicta earum
              aperiam natus possimus nisi quibusdam quos ratione id vitae
              dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Facilis sapiente laboriosam doloremque veritatis in hic ratione
              quidem totam eveniet facere modi placeat culpa eum reprehenderit,
              voluptates voluptatibus! Nam, repudiandae eaque.
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <Tag isCreate name="Science fiction"></Tag>
            <Tag isCreate name="Adventure"></Tag>
          </div>
        </Link>
      </Main>
    </Page>
  );
};
