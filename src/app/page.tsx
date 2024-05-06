"use client"

import Ranking from "@/components/Ranking/Ranking"
import Cards from "@/components/Cards/Cards"
import Menu from "@/components/Menu/Menu";

export default function Home() {

  return (
    <main className="min-h-screen h-auto w-full min-w-[390px] flex items-center flex-col mb-20">
      <Menu />

      <Cards />

      <Ranking />
    </main>
  );
}


