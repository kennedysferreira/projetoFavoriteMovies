import {
  MdArrowBack,
  MdOutlineLock,
  MdOutlineMailOutline,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { Button } from "../../components/Button/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { SignPage } from "../../components/SignPage";

export const SignUp = () => {
  return (
    <SignPage>
      <h2 className="text-2xl font-bold text-rose-100">Crie sua conta</h2>
      <div className="space-y-6">
        <form action="#" className="space-y-2">
          <Input icon={MdOutlinePersonOutline} placeholder="Nome"></Input>
          <Input icon={MdOutlineMailOutline} placeholder="E-mail"></Input>
          <Input icon={MdOutlineLock} placeholder="Senha"></Input>
        </form>
        <Button className="w-full">Cadastrar</Button>
      </div>
      <div className="flex justify-center items-center">
        <ButtonText icon={MdArrowBack} name="Voltar para o login"></ButtonText>
      </div>
    </SignPage>
  );
};
