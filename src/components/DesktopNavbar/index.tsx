import Link from "next/link";
import Image from "next/image";

import {
  HiOutlineHome,
  HiOutlineDatabase,
  HiOutlineBookmark,
  HiOutlineChat,
  HiOutlineLogout,
} from "react-icons/hi";

export default function DesktopNavbar() {
  return (
    <div className="fixed md:block hidden md:w-1/4 lg:w-1/5 xl:w-1/6 h-screen p-2">
      <div className="relative flex flex-col w-full h-full rounded-2xl bg-slate-50 p-5 justify-between">
        <div>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt={"MY ESGI"} width={100} height={100} />
          </Link>

          <div className="mt-44">
            <ul className="flex flex-col gap-6">
              <Link
                href="/posts"
                className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
              >
                <HiOutlineHome className="w-6 h-6 text-[#4074F8]" />
                <p className="font-[family-name:var(--font-geist-sans)] text-base font-semibold">
                  Accueil
                </p>
              </Link>
              <Link
                href="/location"
                className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
              >
                <HiOutlineDatabase className="w-6 h-6 text-[#4074F8]" />
                <p className="font-[family-name:var(--font-geist-sans)] text-base font-semibold">
                  Location
                </p>
              </Link>
              <Link
                href="/favoris"
                className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
              >
                <HiOutlineBookmark className="w-6 h-6 text-[#4074F8]" />
                <p className="font-[family-name:var(--font-geist-sans)] text-base font-semibold">
                  Favoris
                </p>
              </Link>
              <Link
                href="/publications"
                className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
              >
                <HiOutlineChat className="w-6 h-6 text-[#4074F8]" />
                <p className="font-[family-name:var(--font-geist-sans)] text-base font-semibold">
                  Mes posts
                </p>
              </Link>
            </ul>
          </div>
        </div>

        <div>
          <Link
            href="/logout"
            className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
          >
            <HiOutlineLogout className="w-6 h-6 text-[#4074F8]" />
            <p className="font-[family-name:var(--font-geist-sans)] text-base font-semibold">
              Se déconnecter
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
