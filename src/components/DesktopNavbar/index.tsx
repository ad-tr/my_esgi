import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineHome,
  HiOutlineDatabase,
  HiOutlineBookmark,
  HiOutlineChat,
  HiOutlineLogout,
  HiOutlineUser,
  HiOutlinePlusCircle,
} from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function DesktopNavbar() {
  const router = useRouter();
  const [IsAdmin, setIsAdmin] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });

  const handleLogout = async () => {
    try {
      const response = await fetch(`https://api.adaoud.dev/users/Logout`, {
        method: "POST",
        credentials: "include",
      });
      if (response.status === 200) {
        // router.push("/");
      }
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  useEffect(() => {
    const checkIsAdmin = async () => {
      try {
        const response = await fetch("https://api.adaoud.dev/users/IsAdmin", {
          method: "GET",
          credentials: "include",
        });
        console.log('a')
        if (response.status === 200) {
          const data = await response.json();
          console.log(data["IsAdmin"])
          if (data["IsAdmin"]) {
            console.log(data["IsAdmin"])
            setIsAdmin(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkIsAdmin();
  }, [router]);

  const handlePostSubmit = async () => {
    try {
      console.log(JSON.stringify(post))
      const response = await fetch("https://api.adaoud.dev/posts", {
        method: 'POST',
        credentials:"include",
        body: JSON.stringify(post)
      });
      if (response.status === 201) {
        setShowModal(false);
        setPost({
          title: "",
          description: "",
          imgUrl: ""
        });
        alert("Post ajouté avec succès");
      } else {
        alert("Erreur lors de l'ajout du post");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du post:", error);
    }
  };

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

              {IsAdmin && (
                <Link
                  href="/admin"
                  className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
                >
                  <HiOutlineUser className="w-6 h-6 text-[#4074F8]" />
                  <p className="font-[family-name:var(--font-geist-sans)] text-base font-semibold">
                    Admin
                  </p>
                </Link>
              )}

              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
              >
                <HiOutlinePlusCircle className="w-6 h-6 text-[#4074F8]" />
                <p className="font-[family-name:var(--font-geist-sans)] text-base font-semibold">
                  Ajouter
                </p>
              </button>
            </ul>
          </div>
        </div>

        <div>
          <p
            className="flex items-center gap-3 hover:text-[#4074F8] active:hover:text-[#b0c7ff]"
            onClick={handleLogout}
          >
            <HiOutlineLogout className="w-6 h-6 text-[#4074F8]" />
            <span className="font-[family-name:var(--font-geist-sans)] text-base font-semibold">
              Se déconnecter
            </span>
          </p>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Ajouter un nouveau post</h2>
              <input
                type="text"
                placeholder="Titre"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full p-2 border mb-2"
              />
              <textarea
                placeholder="Description"
                value={post.description}
                onChange={(e) => setPost({ ...post, description: e.target.value })}
                className="w-full p-2 border mb-2"
              ></textarea>
              <input
                type="text"
                placeholder="Image URL"
                value={post.imgUrl}
                onChange={(e) => setPost({ ...post, imgUrl: e.target.value })}
                className="w-full p-2 border mb-4"
              />
              <div className="flex gap-4">
                <button
                  onClick={handlePostSubmit}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Ajouter
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 p-2 rounded"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
