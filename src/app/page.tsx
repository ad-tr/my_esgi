"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <>
    <header className="absolute m-3">
      <Image src={'/logo.png'} alt={"MY ESGI"} width={100} height={100}/>
    </header>
    
    <div className="flex bg-[#D7E2FF] h-screen w-screen items-center justify-center">
      <div className="flex flex-col w-2/3 lg:w-1/2 lg:h-1/2 items-center -mt-16">
        <p className="font-[family-name:var(--font-geist-mono)] text-3xl font-bold text-[#283D72] w-fit mb-10">Bienvenue sur MyESGI</p>
        <div className="bg-[#EAEEF5] p-5 rounded-2xl">
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-2xl font-bold">Connexion</p>
            <p className="font-[family-name:var(--font-geist-sans)] text-sm font-light">Votre portail intranet pour accéder à toutes les ressources et services de l'ESGI.</p>
          </div>
          <div className="mt-6">
            <p className="font-[family-name:var(--font-geist-sans) text-md mb-1">Identifiant</p>
            <input type="text" className="w-full rounded-md p-2 bg-[#D7E2FF]"/>

            <p className="font-[family-name:var(--font-geist-sans)] text-md mt-4 mb-1">Mot de passe</p>
            <input type="password" className="w-full rounded-md p-2 bg-[#D7E2FF]"/>

            <button className="w-full rounded-md p-2 bg-[#283D72] mt-5 mb-2 text-[#D7E2FF]" onClick={()=>{router.push("/posts")}}>Connexion</button>
          </div>
          <p className="font-[family-name:var(--font-geist-sans)] font-light text-xs">Nouveau sur MyESGI ?</p>
          <p className="font-[family-name:var(--font-geist-sans)] font-light text-xs">Accédez rapidement aux outils pédagogiques, aux actualités, et aux services étudiants.</p>
        </div>
      </div>
    </div>
    </>
  );
}
