import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { MdStarBorder, MdStar, MdAddCircleOutline } from "react-icons/md";
import { Tag } from "../../components/Tags";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hook/auth";

export const Home = () => {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get(
        `/notes?user_id=${user?.id}&title=${search}`
      );

      setMovies(response.data);
    }

    loadMovies();
  }, [search]);

  return (
    <Page>
      <Header setSearch={setSearch}></Header>
      <div className="flex w-full items-center justify-between mt-8 px-36">
        <h1 className="text-3xl text-white font-bold">My Movies</h1>
        <Link to={"/create"}>
          <Button icon={MdAddCircleOutline}>
            <span>Add movie</span>
          </Button>
        </Link>
      </div>
      <Main className="overflow-y-scroll space-y-4">
        {movies.map((movie: any) => (
          <Link
            to={`/preview/${movie.id}`}
            key={movie.id}
            className="flex flex-col gap-2 bg-zinc-800 rounded-lg w-full p-6"
          >
            <h1 className="text-2xl text-white">{movie.title}</h1>
            <div className="flex gap-2 text-xs items-center">
              {[...Array(5)].map((_, rating) =>
                rating < movie.rating ? (
                  <MdStar className="text-rose-500"></MdStar>
                ) : (
                  <MdStarBorder className="text-rose-500"></MdStarBorder>
                )
              )}
            </div>
            <div className="max-h-12 overflow-hidden">
              <p className="text-stone-400">{movie.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {movie.tags.map((tag: any) => (
                <Tag key={tag.id} name={tag.name} isCreate></Tag>
              ))}
            </div>
          </Link>
        ))}
      </Main>
    </Page>
  );
};
