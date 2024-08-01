import {
  MdArrowBack,
  MdOutlineLock,
  MdOutlineMailOutline,
  MdOutlinePersonOutline,
  MdOutlinePhotoCamera,
} from "react-icons/md";
import { ButtonText } from "../../components/ButtonText";
import { Page } from "../../components/Page";
import { Main } from "../../components/Main";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";

export const Profile = () => {
  return (
    <Page>
      <div>
        <div className="h-36 bg-zinc-800 flex items-center">
          <ButtonText
            className="px-36"
            icon={MdArrowBack}
            name={"Voltar"}
          ></ButtonText>
        </div>
      </div>
      <div className="w-48 h-48 flex justify-center m-auto my-4 items-center mt-[-96px] relative">
        <img
          className="rounded-full"
          src="https://github.com/kennedysferreira.png"
          alt="kennedy ferreira"
        />

        <label
          className="cursor-pointer w-12 h-12 text-xl bg-rose-400 rounded-full absolute flex justify-center items-center right-2 bottom-2"
          htmlFor="avatar"
        >
          <MdOutlinePhotoCamera />
          <input className="hidden" id="avatar" type="file" />
        </label>
      </div>
      <Main>
        <form className="w-96 m-auto space-y-6" action="#">
          <div className="space-y-2">
            <Input placeholder="Name" icon={MdOutlinePersonOutline}></Input>
            <Input placeholder="E-mail" icon={MdOutlineMailOutline}></Input>
          </div>
          <div className="space-y-2">
            <Input placeholder="Senha atual" icon={MdOutlineLock}></Input>
            <Input placeholder="Nova senha" icon={MdOutlineLock}></Input>
          </div>
          <Button className="w-full">Salvar</Button>
        </form>
      </Main>
    </Page>
  );
};
