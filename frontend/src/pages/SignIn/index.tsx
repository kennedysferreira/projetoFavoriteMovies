import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md"
import { Input } from "../../components/Input"
import { SignPage } from "../../components/SignPage"
import { Button } from "../../components/Button/Button"
import { ButtonText } from "../../components/ButtonText"
import { Link } from "react-router-dom"
import { useAuth } from "../../hook/auth"
import { useState } from "react"

export const SignIn = () => {
  const {signIn} = useAuth()

  const [email, setEmail] = useState({} as any)
  const [password, setPassword] = useState({} as any)

  const handleLogin = (e: any) => {
    
    e.preventDefault()
        
    return signIn({email, password})
  }

  return (
    <SignPage>
      <h2 className="text-2xl font-bold text-rose-100">Log-in</h2>
      <div className="space-y-6">
        <form action="#" className="space-y-2">
        <Input onChange={(e) => setEmail(e.target.value)} icon={MdOutlineMailOutline} placeholder="E-mail"></Input>
        <Input onChange={(e) => setPassword(e.target.value)} type="password" icon={MdOutlineLock}  placeholder="Password"></Input>
      </form>
      <Button className="w-full" onClick={handleLogin}>Enter</Button>
      </div>
      <div className="flex justify-center items-center">

        <Link to={"/sign-up"}><ButtonText  name="Create account"></ButtonText> </Link>
       
      </div>
      
      
    </SignPage>
  )
}