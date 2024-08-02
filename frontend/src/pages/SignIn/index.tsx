import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md"
import { Input } from "../../components/Input"
import { SignPage } from "../../components/SignPage"
import { Button } from "../../components/Button/Button"
import { ButtonText } from "../../components/ButtonText"
import { Link } from "react-router-dom"

export const SignIn = () => {
  return (
    <SignPage>
      <h2 className="text-2xl font-bold text-rose-100">Log-in</h2>
      <div className="space-y-6">
        <form action="#" className="space-y-2">
        <Input icon={MdOutlineMailOutline} placeholder="E-mail"></Input>
        <Input icon={MdOutlineLock}  placeholder="Password"></Input>
      </form>
      <Button className="w-full">Enter</Button>
      </div>
      <div className="flex justify-center items-center">

        <Link to={"/sign-up"}><ButtonText  name="Create account"></ButtonText> </Link>
       
      </div>
      
      
    </SignPage>
  )
}