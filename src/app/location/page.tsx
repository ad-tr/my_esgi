"use client";
import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";
import Image from "next/image";

import { HiOutlineInformationCircle, HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import locations from "./location.json";

export default function Rent() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch(
          "https://api.adaoud.dev/users/IsLoggedIn",
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (response.status === 200) {
          const data = await response.json();
          console.log(data["isLoggedIn"]);
          if (!data["isLoggedIn"]) {
            router.push("/");
          } else {
            setIsLoading(false);
          }
        } else {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
        router.push("/");
      }
    };

    checkLogin();
  }, [router]);


  const filteredLocations =
    search !== ""
      ? locations.filter((location) =>
          location.product.name.toLowerCase().includes(search.toLowerCase()),
        )
      : locations;

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
      <div className="fixed right-0 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 z-10">
        <div className="w-full p-2">
          <div className="flex w-full justify-center gap-3">
            <div className="flex w-3/5">
              <div className="flex w-full h-10 items-center gap-2 bg-slate-50 rounded-lg">
                <input
                  type="text"
                  placeholder="Rechercher"
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent w-full h-10 outline-none px-2"
                />
                <HiOutlineSearch className="w-6 h-6 text-[#4074F8] m-1" />
              </div>
            </div>

            <div className="absolute flex bg-[#4074F8] w-10 h-10 top-0 right-0 m-2 rounded-full items-center justify-center text-white">
              A
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col absolute w-full md:w-3/4 lg:w-4/5 xl:w-5/6 md:right-0 mt-20 justify-center">
        <div className="flex w-full justify-center mb-5">
          <div className="w-[25em] md:w-[30em] lg:w-[40em]">
            <p className="text-3xl font-semibold font-[family-name:var(--font-geist-sans)]">
              Empruntez du matériel
            </p>
            <p className="mt-3 mb-5">
              Besoin de matériel pour vos projets ? Empruntez facilement des
              Raspberry Pi, kits Arduino, et bien plus. Pratique, économique et
              écolo !
            </p>
            <hr className="border-1 border-[#38549d]" />
          </div>
        </div>

        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <div
              key={location.product.id}
              className="flex w-full justify-center mb-5"
            >
              <div className="flex w-[25em] md:w-[30em] lg:w-[40em] bg-slate-50 rounded-xl items-center">
                <Image
                  src={location.product.image.src}
                  alt={location.product.image.alt}
                  className="rounded-s-lg"
                  width={200}
                  height={200}
                />
                <div className="p-3 w-full">
                  <div className="flex items-center justify-between">
                    <p className="font-[family-name:var(--font-geist-sans)] text-md font-medium">
                      {location.product.name}
                    </p>
                    <HiOutlineInformationCircle className=" m-1" />
                  </div>
                  <p className="font-[family-name:var(--font-geist-sans)] text-sm font-sm mb-3">
                    {location.product.quantityAvailable} disponibles
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      className="bg-[#D7E2FF] rounded-lg outline-0 p-2"
                    />
                    <button className=" bg-[#38549d] text-white rounded-lg px-3">
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Aucun matériel disponible.
          </p>
        )}
      </div>

      <MobileNavbar />
    </>
  );
}
