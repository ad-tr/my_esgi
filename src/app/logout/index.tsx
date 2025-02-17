import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout(){
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
          router.push("/");
        }
      }, []);
    
}