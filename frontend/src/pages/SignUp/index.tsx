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
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <SignPage>
      <h2 className="text-2xl font-bold text-rose-100">Create your account</h2>
      <div className="space-y-6">
        <form action="#" className="space-y-2">
          <Input icon={MdOutlinePersonOutline} placeholder="Nome"></Input>
          <Input icon={MdOutlineMailOutline} placeholder="E-mail"></Input>
          <Input icon={MdOutlineLock} placeholder="Password"></Input>
        </form>
        <Button className="w-full">Register</Button>
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/"}><ButtonText icon={MdArrowBack} name="Back to log-in"></ButtonText></Link>
        
      </div>
    </SignPage>
  );
};
