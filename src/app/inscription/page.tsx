"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Inscription() {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(
        `http://10.255.0.6:8080/users/Register?FirstName=${encodeURIComponent(firstName)}&LastName=${encodeURIComponent(lastName)}&Email=${encodeURIComponent(email)}&Password=${encodeURIComponent(password)}`,
        {
          method: "POST",
        },
      );

      if (response.status === 200) {
        router.push("/");
      } else {
        setErrorMessage(
          "Erreur lors de l'inscription. Veuillez vérifier vos informations.",
        );
      }
    } catch (error) {
      setErrorMessage("Erreur réseau lors de l'inscription.");
      console.error("Erreur lors de l'inscription:", error);
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
            Inscription sur MyESGI
          </p>
          <div className="bg-slate-50 p-5 rounded-2xl">
            <div>
              <p className="font-[family-name:var(--font-geist-mono)] text-2xl font-bold">
                Inscription
              </p>
              <p className="font-[family-name:var(--font-geist-sans)] text-sm font-light">
                Créez votre compte pour accéder aux ressources ESGI.
              </p>
            </div>
            <div className="mt-6">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="Prénom"
                type="text"
                className="w-full rounded-md p-2 mb-3 bg-[#D7E2FF]"
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Nom"
                type="text"
                className="w-full rounded-md p-2 mb-3 bg-[#D7E2FF]"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                type="email"
                className="w-full rounded-md p-2 mb-3 bg-[#D7E2FF]"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Mot de passe"
                type="password"
                className="w-full rounded-md p-2 mb-3 bg-[#D7E2FF]"
              />

              {errorMessage && (
                <div className="font-[family-name:var(--font-geist-sans)] border-2 border-red-400 my-3 p-3 rounded-md">
                  <p className="text-sm text-red-400">{errorMessage}</p>
                </div>
              )}

              <button
                className="w-full rounded-md p-2 bg-[#283D72] mt-5 mb-2 text-[#D7E2FF] disabled:opacity-50"
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? "Inscription en cours..." : "S'inscrire"}
              </button>
            </div>
            <p className="font-[family-name:var(--font-geist-sans)] font-light text-xs">
              Déjà un compte ?{" "}
              <Link href="/" className="underline">
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
