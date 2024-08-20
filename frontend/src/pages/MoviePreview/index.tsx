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
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/auth";

export const MoviePreview = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({} as any);
  

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`/notes/${params.movieId}`);
      setData(response.data);
      console.log(response.data);

    }
    loadMovie();
  }, []);

  return (
    <Page>
      <Header setSearch={() => navigate(-1)} />
      <Link to={"/"}>
        <ButtonText
          className="mt-8 px-36"
          icon={MdArrowBack}
          name={"Back"}
        ></ButtonText>
      </Link>
      <Main className="overflow-y-scroll space-y-10">
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl text-white font-bold">{data.note?.title}</h1>
          <div className="flex">
            {[...Array(5)].map((_, rating) => {
              return rating < data.note?.rating ? (
                <MdStar className="text-rose-500"></MdStar>
              ) : (
                <MdStarBorder className="text-rose-500"></MdStarBorder>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-white ">
          <img
            className="w-3 h-3 rounded-full"
            src="https://github.com/kennedysferreira.png"
            alt="profile"
          />
          <span>by {user.name}</span>
          <MdAccessTime className="text-rose-400" />
          <data> {data.note?.created_at} </data>
        </div>
        <div className="flex gap-4  text-white">
          {
            data.tags?.map((tag:any) => (
              <Tag key={tag.id} name={tag.name} isCreate></Tag>))
          }
         
        </div>
        <div className="mx-4 text-white text-justify">
          <p>{data.note?.description}</p>
        </div>
      </Main>
    </Page>
  );
};
