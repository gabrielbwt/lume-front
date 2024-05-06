import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import InfoCardMain from "./InfoCardMain"
  import { data } from '../../utils/data'

export default function Ranking() {

    const arraySortedByScore = data.sort((a, b) => b.score - a.score).slice(0,10)

    return(
        <section className="w-full h-[30rem] flex items-center flex-col">
        <div className="flex items-center justify-between  w-[calc(100%-8rem)] mt-8">
          <div className="text-white">
          Estatísticas
          </div>
          <div>
          <Select>
            <SelectTrigger className="w-[180px] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-slate-700 text-white border-slate-800">
              <SelectValue placeholder="Pontos" />
            </SelectTrigger>
            <SelectContent className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-slate-700 border-slate-800 text-white">
              <SelectItem className="hover:cursor-pointer"  value="pontos">Pontos</SelectItem>
              <SelectItem className="hover:cursor-pointer" value="rebotes">Rebotes</SelectItem>
              <SelectItem className="hover:cursor-pointer" value="assistencias">Assistências</SelectItem>
              <SelectItem className="hover:cursor-pointer" value="minutes">Minutos por partida</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>
        <div className="h-[1px] w-[calc(100%-8rem)] mt-2 mb-2"/>
        <div className="flex w-full pl-16 pr-16 pb-16">
          <aside className="w-[50%] mr-8">
            <div className="flex items-center w-full mb-2 border-b border-gray-300">
              <div className=" w-[12%] text-white flex items-center justify-center">
                Posição
              </div>
              <div className="w-[20%]">

              </div>
              <div className="w-[28%] text-white flex items-center justify-center">
                Nome
              </div>
              <div className="w-[20%] text-white flex items-center justify-center">
                Clube
              </div>
              <div className="w-[20%] text-white flex items-center justify-center">
                Pontos
              </div>
            </div>
            <InfoCardMain position='1' player={arraySortedByScore[0]}/>
            <InfoCardMain position='2' player={arraySortedByScore[1]}/>
            <InfoCardMain position='3' player={arraySortedByScore[2]}/>
            <InfoCardMain position='4' player={arraySortedByScore[3]}/>
            <InfoCardMain position='5' player={arraySortedByScore[4]}/>
          </aside>

          <aside className="w-[50%] ml-8">
          <div className="flex items-center justify-between w-full mb-2 border-b border-gray-300">
            <div className="w-[12%] text-white flex items-center justify-center">
                Posição
              </div>
              <div className="w-[20%]">
                
              </div>
              <div className="w-[28%] text-white flex items-center justify-center">
                Nome
              </div>
              <div className="w-[20%] text-white flex items-center justify-center">
                Clube
              </div>
              <div className="w-[20%] text-white flex items-center justify-center">
                Pontos
              </div>
            </div>
            <InfoCardMain position='6' player={arraySortedByScore[5]}/>
            <InfoCardMain position='7' player={arraySortedByScore[6]}/>
            <InfoCardMain position='8' player={arraySortedByScore[7]}/>
            <InfoCardMain position='9' player={arraySortedByScore[8]}/>
            <InfoCardMain position='10' player={arraySortedByScore[9]}/>
          </aside>
        </div>
      </section>
    )

}