import {
  HiOutlineHome,
  HiOutlineDatabase,
  HiOutlineBookmark,
  HiOutlineChat,
  HiOutlineCog,
} from "react-icons/hi";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <div className="md:hidden h-20 w-full fixed bottom-0 flex justify-center">
      <div className="flex w-4/6 h-full rounded-full bg-slate-50 justify-between items-center px-6">
        <Link
          href="/posts"
          className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
        >
          <HiOutlineHome className="w-5 h-5 text-[#4074F8]" />
        </Link>

        <Link
          href="/location"
          className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
        >
          <HiOutlineDatabase className="w-5 h-5 text-[#4074F8]" />
        </Link>

        <Link
          href="/favoris"
          className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
        >
          <HiOutlineBookmark className="w-5 h-5 text-[#4074F8]" />
        </Link>

        <Link
          href="/publications"
          className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
        >
          <HiOutlineChat className="w-5 h-5 text-[#4074F8]" />
        </Link>

        <Link
          href="/parametres"
          className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
        >
          <HiOutlineCog className="w-5 h-5 text-[#4074F8]" />
        </Link>
      </div>
    </div>
  );
}
