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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "../../services/api";


export const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(e: any) {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("Please fill in all fields");
    }
    api.post("/users", { name, email, password });
    toast.success("Account created successfully");
    setName("");
    setEmail("");
    setPassword("");
    return navigate('/')
  }
  return (
    <SignPage>
      <h2 className="text-2xl font-bold text-rose-100">Create your account</h2>
      <div className="space-y-6">
        <form action="#" className="space-y-2">
          <Input
            icon={MdOutlinePersonOutline}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            icon={MdOutlineMailOutline}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            icon={MdOutlineLock}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </form>
        <Button className="w-full" onClick={handleSignUp}>
          Register
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/"}>
          <ButtonText icon={MdArrowBack} name="Back to log-in"></ButtonText>
        </Link>
      </div>
    </SignPage>
  );
};
