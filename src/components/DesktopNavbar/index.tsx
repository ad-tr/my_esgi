import Link from "next/link"
import Image from "next/image"

import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineDatabase, HiOutlineBookmark, HiOutlineChat, HiOutlineCog } from "react-icons/hi";


export default function DesktopNavbar(){
    return(
        <div className="fixed sm:block hidden sm:w-56 md:w-60 lg:w-72 h-screen p-2">
            <div className="relative flex-col w-full h-full rounded-2xl bg-[#EAEEF5] p-5 justify-between">
                <div>
                    <Link href={"/"}>
                        <Image src={'/logo.png'} alt={"MY ESGI"} width={100} height={100}/>
                    </Link>
                    
                    <div className="mt-44">
                        <ul className="flex flex-col gap-6">
                            <Link href="/posts" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                                <HiOutlineHome className="w-8 h-8 text-[#4074F8]"/>
                                <p className="font-[family-name:var(--font-geist-sans)] text-xl font-semibold">Accueil</p>
                            </Link>
                            <Link href="/shop" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                                <HiOutlineShoppingBag className="w-8 h-8 text-[#4074F8]"/>
                                <p className="font-[family-name:var(--font-geist-sans)] text-xl font-semibold">Market</p>
                            </Link>
                            <Link href="/equipement" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                                <HiOutlineDatabase className="w-8 h-8 text-[#4074F8]"/>
                                <p className="font-[family-name:var(--font-geist-sans)] text-xl font-semibold">Equipement</p>
                            </Link>
                            <Link href="/favoris" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                                <HiOutlineBookmark className="w-8 h-8 text-[#4074F8]"/>
                                <p className="font-[family-name:var(--font-geist-sans)] text-xl font-semibold">Favoris</p>
                            </Link>
                            <Link href="/publications" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                                <HiOutlineChat className="w-8 h-8 text-[#4074F8]"/>
                                <p className="font-[family-name:var(--font-geist-sans)] text-xl font-semibold">Mes posts</p>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div>
                    <Link href="/settings" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                        <HiOutlineCog className="w-8 h-8 text-[#4074F8]"/>
                        <p className="font-[family-name:var(--font-geist-sans)] text-xl font-semibold">Parametres</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}