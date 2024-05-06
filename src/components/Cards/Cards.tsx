import { Button } from "@/components/ui/button"
import { useState } from "react"
import Card from "./Card"
import { data } from '../../utils/data'

export default function Cards() {

    const [categorySelected, setCategorySelected] = useState('Basquete')

    const arraySortedByScore = data.sort((a, b) => b.score - a.score)

    return(
        <section className="w-full h-[30rem]">
        <div className="flex justify-start items-center gap-4 pl-16">
          <Button className={`${categorySelected === 'Basquete' ? 'bg-slate-400' : 'bg-slate-700'} hover:bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white`} variant="secondary" onClick={() => {setCategorySelected('Basquete')}}>
            Basquete
          </Button>
          <Button className={`${categorySelected === 'Futebol' ? 'bg-slate-400' : 'bg-slate-700'} hover:bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white`} variant="secondary" onClick={() => {setCategorySelected('Futebol')}}>
            Futebol
          </Button>
          <Button className={`${categorySelected === 'Volei' ? 'bg-slate-400' : 'bg-slate-700'} hover:bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white`} variant="secondary" onClick={() => {setCategorySelected('Volei')}}>
            Volei
          </Button>
        </div>
        <div className="flex items-center justify-center overflow-y-scroll gap-16 pl-16 pt-8 pr-16">

          <Card player={arraySortedByScore[0]}/>
          <Card player={arraySortedByScore[1]}/>
          <Card player={arraySortedByScore[2]}/>
          <Card player={arraySortedByScore[3]}/>
        </div>     

      </section>
    )
}