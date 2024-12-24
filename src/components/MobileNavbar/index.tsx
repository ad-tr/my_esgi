import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineDatabase, HiOutlineBookmark, HiOutlineChat, HiOutlineCog } from "react-icons/hi";
import Link from "next/link";

export default function MobileNavbar(){
    return(
        <div className="sm:hidden block h-24 w-screen p-2 absolute bottom-0">
            <div className="flex w-full h-full rounded-full bg-[#EAEEF5] justify-between items-center px-10">  
                <Link href="/posts" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                    <HiOutlineHome className="w-8 h-8 text-[#4074F8]"/>
                </Link>

                <Link href="/posts" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                    <HiOutlineShoppingBag className="w-8 h-8 text-[#4074F8]"/>
                </Link>

                <Link href="/posts" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                    <HiOutlineDatabase className="w-8 h-8 text-[#4074F8]"/>
                </Link>

                <Link href="/posts" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                    <HiOutlineBookmark className="w-8 h-8 text-[#4074F8]"/>
                </Link>

                <Link href="/posts" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                    <HiOutlineChat className="w-8 h-8 text-[#4074F8]"/>
                </Link>

                <Link href="/posts" className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]">
                    <HiOutlineCog className="w-8 h-8 text-[#4074F8]"/>
                </Link>
            </div>
        </div>
    )
}