"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleConnect = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(
        `https://api.adaoud.dev/users/Login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("authToken", data);
        router.push("/posts");
      } else {
        setErrorMessage("Identifiant ou mot de passe incorrect.");
      }
    } catch (error) {
      setErrorMessage("Erreur lors de la connexion.");
      console.error("Erreur lors de la connexion:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="absolute m-3">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt={"MY ESGI"} width={100} height={100} />
        </Link>
      </header>

      <div className="flex bg-[#D7E2FF] h-screen w-screen items-center justify-center">
        <div className="flex flex-col w-2/3 lg:w-1/2 lg:h-1/2 items-center -mt-16">
          <p className="font-[family-name:var(--font-geist-mono)] text-3xl font-bold text-[#283D72] w-fit mb-10">
            Bienvenue sur MyESGI
          </p>
          <div className="bg-slate-50 p-5 rounded-2xl">
            <div>
              <p className="font-[family-name:var(--font-geist-mono)] text-2xl font-bold">
                Connexion
              </p>
              <p className="font-[family-name:var(--font-geist-sans)] text-sm font-light">
                Votre portail intranet pour accéder à toutes les ressources et
                services de l&apos;ESGI.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-[family-name:var(--font-geist-sans) text-md mb-1">
                Identifiant
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className="w-full rounded-md p-2 bg-[#D7E2FF]"
              />

              <p className="font-[family-name:var(--font-geist-sans)] text-md mt-4 mb-1">
                Mot de passe
              </p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="w-full rounded-md p-2 bg-[#D7E2FF]"
              />

              {errorMessage && (
                <div className="font-[family-name:var(--font-geist-sans)] border-2 border-red-400 mt-3 p-3 rounded-md">
                  <p className="text-sm text-red-400">{errorMessage}</p>
                </div>
              )}

              <button
                className="w-full rounded-md p-2 bg-[#283D72] mt-5 mb-2 text-[#D7E2FF] disabled:opacity-50"
                onClick={handleConnect}
                disabled={loading}
              >
                {loading ? "Connexion en cours..." : "Connexion"}
              </button>
            </div>
            <Link
              href={"/inscription"}
              className="font-[family-name:var(--font-geist-sans)] font-light text-xs"
            >
              Nouveau sur MyESGI ?
            </Link>
            <p className="font-[family-name:var(--font-geist-sans)] font-light text-xs">
              Accédez rapidement aux outils pédagogiques, aux actualités, et aux
              services étudiants.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
