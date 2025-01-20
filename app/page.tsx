import Image from "next/image";
import shturmanPic from "@/public/shturman.jpg";
import AuthView from "./components/auth-view";

export default async function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start">
      <div className="w-full max-w-4xl px-4 py-16">
        <div className="justify-items-center text-center mb-12">
          <Image
            src={shturmanPic}
            width={100}
            height={100}
            alt="EFT Teamkill Tracker Bot Profile Picture"
          />
          <h1 className="text-4xl font-bold text-white my-2 tracking-tight">
            EFT Teamkill Tracker Data
          </h1>
          <div className="h-[1px] w-24 bg-zinc-800 mx-auto"></div>
        </div>
        <AuthView />
      </div>
    </div>
  );
}
