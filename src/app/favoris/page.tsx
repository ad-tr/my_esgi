"use client";

import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";
import { HiOutlineSearch } from "react-icons/hi";
import Image from "next/image";
import {
  HiOutlineInformationCircle,
  HiOutlineBookmark,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Favoris = {
  id: number;
  authorId: string;
  postDate: string;
  title: string;
  description: string;
  imgUrl?: string;
};

export default function Favoris() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [favoris, setFavoris] = useState<Favoris[]>([]);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch(
          "https://10.255.0.6:8080/users/IsLoggedIn",
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (response.status === 200) {
          const data = await response.json();
          if (!data.isLoggedIn) {
            router.push("/");
          } else {
            setIsLoading(false);
          }
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Erreur de vérification de connexion:", error);
        router.push("/");
      }
    };

    checkLogin();
  }, [router]);

  useEffect(() => {
    if (!isLoading) {
      const fetchPosts = async () => {
        setLoading(true);
        setErrorMessage(null);

        try {
          const response = await fetch("https://10.255.0.6:8080/posts/GetFavorites", {
            method: "GET",
            credentials: "include",
          });

          if (response.status === 200) {
            const data = await response.json();
            setFavoris(data);
          } else {
            setErrorMessage("Erreur lors de la récupération des posts");
          }
        } catch (error) {
          setErrorMessage("Erreur réseau lors de la récupération des posts.");
          console.error("Erreur lors de la récupération des posts:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPosts();
    }
  }, [isLoading]);

  const postToShow =
    search !== ""
      ? favoris.filter((favoris1) =>
          favoris1.description?.toLowerCase().includes(search.toLowerCase()),
        )
      : favoris;

  if (isLoading) {
    return (
      <p className="text-center text-blue-500 mt-10">
        Vérification en cours...
      </p>
    );
  }

  return (
    <>
      <DesktopNavbar />
      <div className="fixed right-0 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 -z-30">
        <div className="w-full p-2">
          <div className="flex w-full justify-center gap-3">
            <div className="flex w-3/5">
              <div className="flex w-full h-10 items-center gap-2 bg-slate-50 rounded-lg">
                <input
                  type="text"
                  placeholder="Rechercher"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent w-full h-10 outline-none px-2"
                />
                <HiOutlineSearch className="w-6 h-6 text-[#4074F8] m-1 cursor-pointer" />
              </div>
            </div>

            <div className="absolute flex bg-[#4074F8] w-10 h-10 top-0 right-0 m-2 rounded-full items-center justify-center text-white cursor-pointer">
              A
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col absolute w-full md:w-3/4 lg:w-4/5 xl:w-5/6 md:right-0 mt-20 justify-center -z-30">
        {loading ? (
          <p className="text-center text-blue-500">Chargement des posts...</p>
        ) : postToShow.length > 0 ? (
          postToShow.map((post) => (
            <div key={post.id} className="flex w-full justify-center mb-5">
              <div className="w-[25em] md:w-[30em] lg:w-[30em] bg-slate-50 p-3 rounded-xl shadow-md">
                <div className="flex justify-between items-center">
                  <div className="flex gap-6 items-center mb-3">
                    <p className="bg-[#4074F8] w-9 h-9 rounded-full flex justify-center items-center font-bold text-slate-50">
                      {post.authorId.charAt(0).toUpperCase()}
                    </p>
                    <div>
                      <p className="text-md font-medium leading-5">
                        Auteur: {post.authorId}
                      </p>
                      <p className="text-sm text-gray-500">
                        Posté le {new Date(post.postDate).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })} à {new Date(post.postDate).toLocaleTimeString("fr-FR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                  <HiOutlineInformationCircle className="w-6 h-6 text-[#4074F8] cursor-pointer" />
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="leading-5 text-sm mb-2 text-gray-700">
                    {post.description}
                  </p>
                </div>

                {post.imgUrl && (
                  <div className="mb-3">
                    <Image
                      src={post.imgUrl}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}

                <div className="flex justify-between m-2">
                  <div className="flex gap-3">
                  </div>
                  <HiOutlineBookmark className="w-6 h-6 text-[#4074F8] cursor-pointer hover:text-yellow-500" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucun post disponible.</p>
        )}

        {errorMessage && (
          <p className="text-center text-red-500 mt-5">{errorMessage}</p>
        )}
      </div>

      <MobileNavbar />
    </>
  );
}
