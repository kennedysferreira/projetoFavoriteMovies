import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Main } from "../../components/Main";
import { Page } from "../../components/Page";
import { MdArrowBack, MdAdd, MdClose } from "react-icons/md";
import { Tag } from "../../components/Tags";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const CreateMovie = () => {
  return (
    <Page>
      <Header />
      <Link to={"/"}>
        <ButtonText
          className="mt-8 px-36"
          icon={MdArrowBack}
          name={"Back"}
        ></ButtonText>
      </Link>
      <Main className="overflow-y-scroll space-y-10 px-1">
        <h1 className="text-3xl text-white font-bold">New title</h1>
        <div className="flex gap-10">
          <Input placeholder="Title"></Input>
          <Input placeholder="Your grade (from 0 to 5)"></Input>
        </div>
        <textarea
          className="w-full min-h-60 text-sm bg-zinc-800 px-6 py-4 text-zinc-400 rounded-lg focus:outline-none  resize-none"
          placeholder="Movie description"
        ></textarea>
        <div className="space-y-6">
          <span className="text-lg text-zinc-400">Markers</span>
          <div className="bg-zinc-950 rounded-lg p-4 mt-2 flex gap-6">
            <Tag isCreate icon={MdClose} name="Science fiction"></Tag>
            <Tag isCreate={false} icon={MdAdd} name="New marker"></Tag>
          </div>
        </div>
        <div className="flex gap-10 ">
          <Button className="bg-zinc-950 flex-1 hover:bg-gray-900">
            <span className="text-neutral-200">Delete movie</span>
          </Button>
          <Button className="flex-1">
            <span>Save Changes</span>
          </Button>
        </div>
      </Main>
    </Page>
  );
};
