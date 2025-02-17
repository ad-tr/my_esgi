"use client";

import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";
import { HiOutlineSearch, HiOutlineMenuAlt2 } from "react-icons/hi";
import Image from "next/image";
import {
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlineInformationCircle,
  HiOutlineBookmark,
} from "react-icons/hi";
import { useState } from "react";

import posts from "./publications.json";

export default function Publications() {
  const [search, setSearch] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [postCategory, setPostCategory] = useState<string>("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPostCategory(e.target?.value);
  };

  const postToShow =
    search !== ""
      ? posts.filter(
          (post) => post.description && post.description.includes(search),
        )
      : posts;

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

            <div className="bg-slate-50 p-1 rounded-lg">
              <HiOutlineMenuAlt2
                className="w-6 h-6 text-[#4074F8] m-1"
                onClick={() => {
                  setOpenModal(true);
                }}
              />
            </div>

            <div className="absolute flex bg-[#4074F8] w-10 h-10 top-0 right-0 m-2 rounded-full items-center justify-center text-white">
              A
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-50 rounded-lg w-96 p-6">
            <h2 className="text-2xl font-bold mb-4">Filtrer les posts</h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="category">
                Catégorie
              </label>
              <select
                id="category"
                onChange={handleCategoryChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="tech">Évenements</option>
                <option value="business">Cours</option>
                <option value="design">Activités</option>
              </select>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  setOpenModal(false);
                  setPostCategory("");
                }}
                className="px-4 py-2 text-[#283D72] rounded-lg"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="px-4 py-2 bg-[#283D72] text-slate-50 rounded-lg"
              >
                Appliquer
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex-col absolute w-full md:w-3/4 lg:w-4/5 xl:w-5/6 md:right-0 mt-20 justify-center">
        {postToShow.length > 0 ? (
          postToShow.map((post) => (
            <div key={post.id} className="flex w-full justify-center mb-5">
              <div className="w-[25em] md:w-[30em] lg:w-[30em] bg-slate-50 p-3 rounded-xl">
                <div className="flex justify-between">
                  <div className="flex gap-6 items-center mb-3">
                    <p className="bg-[#4074F8] w-9 h-9 rounded-full flex justify-center items-center font-bold text-slate-50">
                      {post.authorId}
                    </p>
                    <div>
                      <p className="font-[family-name:var(--font-geist-sans)] text-md font-medium leading-5">
                        Vous
                      </p>
                      <p className="font-[family-name:var(--font-geist-sans)] text-sm text-gray-500">
                        Posté le{" "}
                        {new Date(post.postDate).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        à{" "}
                        {new Date(post.postDate).toLocaleTimeString("fr-FR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                  <HiOutlineInformationCircle className="w-6 h-6 text-[#4074F8]" />
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="leading-5 text-sm mb-2">{post.description}</p>
                </div>

                {post.imgUrl && (
                  <Image
                    src={post.imgUrl}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="rounded-lg"
                  />
                )}

                {/* Footer des actions */}
                <div className="flex justify-between m-2">
                  <div className="flex gap-3">
                    <HiOutlineHeart className="w-6 h-6 text-[#4074F8]" />
                    <HiOutlineChat className="w-6 h-6 text-[#4074F8]" />
                  </div>
                  <HiOutlineBookmark className="w-6 h-6 text-[#4074F8]" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucun post disponible.</p>
        )}
      </div>

      <MobileNavbar />
    </>
  );
}
