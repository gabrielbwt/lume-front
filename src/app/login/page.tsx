"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import useAuth from "@/hooks/useAuth";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {isLogin, setIsLogin} = useAuth()
    const [isError, setIsError] = useState(false)
    const router = useRouter();

    function handleLogin(){
        if(email === 'vasco@vasco.com.br' && password === 'vasco'){
            setIsLogin(true)
            router.push('/');
        } else{
            setIsError(true)
        }
    }

  return (
    <main className="h-screen w-full min-w-[390px] flex items-center flex-col">
        
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] flex items-center">

        <div className="w-full h-screen relative">
                <Image alt='' src="https://img.freepik.com/fotos-premium/uma-tartaruga-nadando-em-um-recife-de-coral-com-peixes-e-corais_973047-22963.jpg" layout="fill" objectFit="cover" style={{borderRadius: '0.5rem'}} />
        </div>

      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground text-white">
              Digite seu email e sua senha
            </p>
          </div>
          
          <div className="grid gap-4">
          
            <div className="grid gap-2">
            
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input id="password" type="password" required onChange={e => setPassword(e.target.value)}/>
            </div>
            <Button type="submit" className="w-full" onClick={handleLogin}>
              Login
            </Button>
        
            {isError && <p className="text-red-500 text-center">Email ou senha incorretos</p>}

          </div>
          <div className="mt-4 text-center text-sm">
            Não possui uma conta?{" "}
            <Link href="#" className="underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>

    </main>
  );
}


