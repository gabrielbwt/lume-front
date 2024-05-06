import { Button } from "@/components/ui/button"
import WalletSVG from '../../../public/Wallet.svg'
import Image from 'next/image'
import Logo from '../../../public/tartaruga.png'
import Logout from '../../../public/Logout.svg'
import Link from "next/link"
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

export default function Menu() {

    const { isLogin, setIsLogin } = useAuth()
    const router = useRouter()

    function handleLogout(){
        setIsLogin(false)
        router.push('/')
    }

    return(
        <menu className="w-full h-20 pl-16 pr-16 flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link href="/">
          <Image alt='' className="invert" src={Logo} height={50}/>
          </Link>
          {isLogin && <div className="flex gap-5 ml-4 text-white">
          <div className="text-slate-500">
            |
          </div>
            <Link href="/market" className="hover:cursor-pointer">
              Mercado
            </Link>
            <Link href="/myteam" className="hover:cursor-pointer">
              Meu time
            </Link>
          </div>}
        </div>
        
        <div className="h-8 w-22 flex items-center rounded justify-center hover:cursor-pointer">
          {!isLogin && <Link href='/login'>
        <Button className="bg-slate-700 hover:bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white fill-white" variant="secondary">
           <Image alt='' className=" fill-white" src={WalletSVG}/>Login
          </Button>
          </Link>}

          {isLogin && 
          
          <div className="flex items-center justify-center gap-4">
           
        <Button className="bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white fill-white" variant="secondary">
           Seja bem vindo, Vasco!
          </Button>
          
          
        <Button className="bg-slate-700 hover:bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white fill-white" variant="secondary" onClick={handleLogout}>
           <Image alt='' className=" fill-white" src={Logout}/>Sair
          </Button>
          </div>}

        </div>
      </menu>
    )
}