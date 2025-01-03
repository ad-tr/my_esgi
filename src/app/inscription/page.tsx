"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Inscription() {
  const router = useRouter()
  const [idValue, setIdValue] = useState<string>("")
  const [passwdValue, setPasswdValue] = useState<string>("")
  const [messageId, setMessageId] = useState<boolean | undefined>(undefined)
  const [messagePw, setMessagePw] = useState<boolean | undefined>(undefined)
  

  const checkIdentifiant = (identifiant: string) => {
    const checkFormat = /\w{5,}/
    const resultTest = checkFormat.exec(identifiant)
    
    if (resultTest){
        setMessageId(false)
        return false
    }
    setMessageId(true)
  }


  // todo implement password check with api
  const checkPassword = (password: string) => {
    const checkFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/g
    const resultTest = checkFormat.exec(password)

    if (resultTest){
        setMessagePw(false)
        return false
    }
    setMessagePw(true)
  }

  const handleConnect = () => {
    const isPasswordValid = checkPassword(passwdValue);
    const isIdentifiantValid = checkIdentifiant(idValue);

    if (isPasswordValid == false  && isIdentifiantValid == false) {
      router.push("/posts");
    }
  }

  return (
    <>
        <header className="absolute m-3">
            <Link href={"/"}>
                <Image src={'/logo.png'} alt={"MY ESGI"} width={100} height={100}/>
            </Link>
        </header>
        
        <div className="flex bg-[#D7E2FF] h-screen w-screen items-center justify-center">
        <div className="flex flex-col w-2/3 lg:w-1/2 lg:h-1/2 items-center -mt-16">
            <p className="font-[family-name:var(--font-geist-mono)] text-3xl font-bold text-[#283D72] w-fit mb-10">Bienvenue sur MyESGI</p>
            <div className="bg-[#EAEEF5] p-5 rounded-2xl">
            <div>
                <p className="font-[family-name:var(--font-geist-mono)] text-2xl font-bold">Inscription</p>
                <p className="font-[family-name:var(--font-geist-sans)] text-sm font-light">Votre portail intranet pour accéder à toutes les ressources et services de l'ESGI.</p>
            </div>
            <div className="mt-6">
                <p className="font-[family-name:var(--font-geist-sans) text-md mb-1">Identifiant</p>
                <input onChange={e => setIdValue(e.target.value)} value={idValue} type="text" className="w-full rounded-md p-2 bg-[#D7E2FF]"/>

                <p className="font-[family-name:var(--font-geist-sans)] text-md mt-4 mb-1">Mot de passe</p>
                <input onChange={e => setPasswdValue(e.target.value)} value={passwdValue} type="password" className="w-full rounded-md p-2 bg-[#D7E2FF]"/>

                <p className="font-[family-name:var(--font-geist-sans)] text-md mt-4 mb-1">Confirmer le mot de passe</p>
                <input onChange={e => setPasswdValue(e.target.value)} value={passwdValue} type="password" className="w-full rounded-md p-2 bg-[#D7E2FF]"/>
                
                {messageId == true && (
                    <div className="font-[family-name:var(--font-geist-sans)] border-2 border-red-400 my-3 p-3 rounded-md">
                        <p className="text-sm text-red-400">Votre identifiant doit au moins contenir 5 caractères</p>
                    </div>
                )}


                {messagePw == true && (
                    <div className="font-[family-name:var(--font-geist-sans)] border-2 border-red-400 my-3 p-3 rounded-md">
                        <p className="text-sm text-red-400">Votre mot de passe doit respecter les critères suivants :</p>
                        <ul className="text-sm text-red-400">
                            <li>- Contenir au moins 8 caractères.</li>
                            <li>- Contenir au moins 3 chiffres.</li>
                            <li>- Contenir au moins une majuscule.</li>
                        </ul>
                    </div>
                )}

    
                <button className="w-full rounded-md p-2 bg-[#283D72] mt-5 mb-2 text-[#D7E2FF]" onClick={handleConnect}>S'inscrire</button>
            </div>
            <p className="font-[family-name:var(--font-geist-sans)] font-light text-xs">Accédez rapidement aux outils pédagogiques, aux actualités, et aux services étudiants.</p>
            </div>
        </div>
        </div>
    </>
  );
}
