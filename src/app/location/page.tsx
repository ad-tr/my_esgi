"use client"
import MobileNavbar from "@/components/MobileNavbar"
import DesktopNavbar from "@/components/DesktopNavbar"
import Image from "next/image"

import { HiOutlineInformationCircle, HiOutlineMenuAlt2, HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

import locations from "./location.json";

export default function Rent(){

    const [search, setSearch] = useState<string>("");
    const [openModal, setOpenModal] = useState<boolean>(false)

    const [locationCategory, setLocationCategory] = useState<string>("")
    
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocationCategory(e.target?.value);
    };

    const filteredLocations = search !== "" 
    ? locations.filter((location) => location.product.name.toLowerCase().includes(search.toLowerCase()))
    : locations;

    return (
        <>
            <DesktopNavbar/>
            <div className="fixed right-0 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 z-10">
                <div className="w-full p-2">
                    <div className="flex w-full justify-center gap-3">
                        <div className="flex w-3/5">
                            <div className="flex w-full h-10 items-center gap-2 bg-slate-50 rounded-lg">
                                <input type="text" placeholder="Rechercher" onChange={(e) => setSearch(e.target.value)} className="bg-transparent w-full h-10 outline-none px-2"/>
                                <HiOutlineSearch className="w-6 h-6 text-[#4074F8] m-1" />
                            </div>
                        </div>

                        <div className="bg-slate-50 p-1 rounded-lg">
                            <HiOutlineMenuAlt2 className="w-6 h-6 text-[#4074F8] m-1" onClick={()=>{setOpenModal(true)}}/>
                        </div>

                        <div className="absolute flex bg-[#4074F8] w-10 h-10 top-0 right-0 m-2 rounded-full items-center justify-center text-white">
                            A
                        </div>
                    </div>
                </div>
            </div>

            { openModal && (
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
                                onClick={()=>{
                                    setOpenModal(false)
                                    setLocationCategory("")
                                }}
                                className="px-4 py-2 text-[#283D72] rounded-lg"
                            >
                                Fermer
                            </button>
                            <button
                                onClick={() => {
                                    setOpenModal(false)
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
                <div className="flex w-full justify-center mb-5">
                    <div className="w-[25em] md:w-[30em] lg:w-[40em]">
                        <p className="text-3xl font-semibold font-[family-name:var(--font-geist-sans)]">Empruntez du matériel</p>
                        <p className="mt-3 mb-5">Besoin de matériel pour vos projets ? Empruntez facilement des Raspberry Pi, kits Arduino, et bien plus. Pratique, économique et écolo !</p>
                        <hr className="border-1 border-[#38549d]"/>
                    </div>
                </div>

                { filteredLocations.length > 0 ? (
                    filteredLocations.map((location) => (
                        <div key={location.product.id} className="flex w-full justify-center mb-5">
                            <div className="flex w-[25em] md:w-[30em] lg:w-[40em] bg-slate-50 rounded-xl items-center">
                                <Image src={location.product.image.src} alt={location.product.image.alt} className="rounded-s-lg" width={200} height={200}/>
                                <div className="p-3 w-full">
                                    <div className="flex items-center justify-between">
                                        <p className="font-[family-name:var(--font-geist-sans)] text-md font-medium">{location.product.name}</p>
                                        <HiOutlineInformationCircle className=" m-1"/>
                                    </div>
                                    <p className="font-[family-name:var(--font-geist-sans)] text-sm font-sm mb-3">{location.product.quantityAvailable} disponibles</p>
                                    <div className="flex gap-3">
                                        <input type="number" className="bg-[#D7E2FF] rounded-lg outline-0 p-2"/>
                                        <button className=" bg-[#38549d] text-white rounded-lg px-3">Ajouter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))) : (
                    <p className="text-center text-gray-500">Aucun matériel disponible.</p>
                )}
            </div>

            <MobileNavbar/>
        </>    
    )
}