import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md"
import { Input } from "../../components/Input"
import { SignPage } from "../../components/SignPage"
import { Button } from "../../components/Button/Button"
import { ButtonText } from "../../components/ButtonText"

export const SignIn = () => {
  return (
    <SignPage>
      <h2 className="text-2xl font-bold text-rose-100">Faça seu login</h2>
      <div className="space-y-6">
        <form action="#" className="space-y-2">
        <Input icon={MdOutlineMailOutline} placeholder="E-mail"></Input>
        <Input icon={MdOutlineLock}  placeholder="Senha"></Input>
      </form>
      <Button className="w-full">Entrar</Button>
      </div>
      <div className="flex justify-center items-center">
    <ButtonText  name="Criar conta"></ButtonText>    
      </div>
      
      
    </SignPage>
  )
}