"use client";

import { HiOutlineSearch, HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <div className="fixed right-0 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 z-10">
      <div className="w-full p-2">
        <div className="flex w-full justify-center gap-3">
          <div className="flex w-3/5">
            <div className="flex w-full h-10 items-center gap-2 bg-slate-50 rounded-lg">
              <input
                type="text"
                placeholder="Rechercher"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="bg-transparent w-full h-10 outline-none px-2"
              />
              <HiOutlineSearch className="w-6 h-6 text-[#4074F8] m-1" />
            </div>
          </div>

          <div className="bg-slate-50 p-1 rounded-lg">
            <HiOutlineMenuAlt2 className="w-6 h-6 text-[#4074F8] m-1" />
          </div>

          <div className="absolute flex bg-[#4074F8] w-10 h-10 top-0 right-0 m-2 rounded-full items-center justify-center text-white">
            A
          </div>
        </div>
      </div>
    </div>
  );
}
