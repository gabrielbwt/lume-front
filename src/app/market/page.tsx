"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { data } from '../../utils/data';
import { Input } from "@/components/ui/input"
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Menu from "@/components/Menu/Menu";

export default function Market(){

    const [sportSelected, setSportSelected] = useState('basketball');
    const [selections, setSelections] = useState({
        gender: ['male', 'female'] as string[],
        category: ['adult', 'sub20', 'sub18', 'base'] as string[],
    });
    const [minValue, setMinValue] = useState('0')
    const [maxValue, setMaxValue] = useState('100')

    interface Player {
        gender: string;
        category: string;
        score: number;
    }

    function handleSelectCheckbox(type: 'gender' | 'category', name: string) {
        setSelections(prevSelections => {
            const selected = [...prevSelections[type]]; // Create a copy of the array
            if (selected.includes(name)) {
                selected.splice(selected.indexOf(name), 1);
            } else {
                selected.push(name);
            }
            return { ...prevSelections, [type]: selected }; // Update the state
        });
    }

    const filteredData = data.filter((player: Player) => selections.gender.includes(player.gender) && 
                                                         selections.category.includes(player.category) && 
                                                         (minValue.length > 0 ? player.score >= Number(minValue) : true) && 
                                                         (maxValue.length > 0 ? player.score <= Number(maxValue) : true)
                                                        ).sort((a,b) => b.score - a.score);
    

    return(
        <main className="min-h-screen h-auto w-full min-w-[390px] flex items-center flex-col">
          <Menu />
        <section className="w-full">
        <div className="flex justify-start items-center gap-4 pl-16">
          <Button className={`${sportSelected === 'basketball' ? 'bg-slate-400' : 'bg-slate-700'} hover:bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white`} variant="secondary" onClick={() => {setSportSelected('basketball')}}>
            Basquete
          </Button>
          <Button className={`${sportSelected === 'soccer' ? 'bg-slate-400' : 'bg-slate-700'} hover:bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white`} variant="secondary" onClick={() => {setSportSelected('soccer')}}>
            Futebol
          </Button>
          <Button className={`${sportSelected === 'volleyball' ? 'bg-slate-400' : 'bg-slate-700'} hover:bg-slate-600 bg-opacity-50 flex justify-center items-center gap-2 text-white`} variant="secondary" onClick={() => {setSportSelected('volleyball')}}>
            Volei
          </Button>
        </div>
        </section>
        <div className="flex w-[calc(100%-8rem)] justify-end items-center gap-4">
            <div>
        <Select>
            <SelectTrigger className="w-[180px] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-slate-700 text-white border-slate-800">
              <SelectValue placeholder="Pontos" />
            </SelectTrigger>
            <SelectContent className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-slate-700 border-slate-800 text-white">
              <SelectItem className="hover:cursor-pointer" value="pontos">Pontos</SelectItem>
              <SelectItem className="hover:cursor-pointer" value="rebotes">Rebotes</SelectItem>
              <SelectItem className="hover:cursor-pointer" value="assistencias">Assistências</SelectItem>
              <SelectItem className="hover:cursor-pointer" value="minutes">Minutos por partida</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>
        <div className="flex w-[calc(100%-8rem)] mt-8">
            <div className="w-[14rem]">
            <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            <div className="font-semibold text-white">
              Gênero
            </div>
            <div className="flex items-center justify-start gap-2"><Checkbox checked={selections.gender.includes('male')} className="border-slate-500 data-[state=checked]:bg-slate-900" onClick={() => handleSelectCheckbox('gender','male')}/> Masculino</div>
            <div className="flex items-center justify-start gap-2"><Checkbox checked={selections.gender.includes('female')} className="border-slate-500 data-[state=checked]:bg-slate-900" onClick={() => handleSelectCheckbox('gender','female')}/> Feminino</div>
            <div className="font-semibold text-white">
              Categoria
            </div>
            <div className="flex items-center justify-start gap-2"><Checkbox checked={selections.category.includes('adult')} className="border-slate-500 data-[state=checked]:bg-slate-900" onClick={() => handleSelectCheckbox('category','adult')}/> Adulto</div>
            <div className="flex items-center justify-start gap-2"><Checkbox checked={selections.category.includes('sub20')} className="border-slate-500 data-[state=checked]:bg-slate-900" onClick={() => handleSelectCheckbox('category','sub20')}/> Sub-20</div>
            <div className="flex items-center justify-start gap-2"><Checkbox checked={selections.category.includes('sub18')} className="border-slate-500 data-[state=checked]:bg-slate-900" onClick={() => handleSelectCheckbox('category','sub18')}/> Sub-18</div>
            <div className="flex items-center justify-start gap-2"><Checkbox checked={selections.category.includes('base')} className="border-slate-500 data-[state=checked]:bg-slate-900" onClick={() => handleSelectCheckbox('category','base')}/> Atletas de Base</div>
            <div className="font-semibold text-white">
              Filtro
            </div>
            <div>
                <label className="text-slate-300">
                    Valor mínimo
                </label>
                <Input inputMode="numeric" pattern="[0-9]*" value={minValue} onChange={e => setMinValue(e.target.value)} placeholder="0" className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-inherit text-white w-[10rem]" />
            </div>
            <div>
                <label className="text-slate-300">
                    Valor máximo
                </label>
                <Input inputMode="numeric" pattern="[0-9]*" value={maxValue} onChange={e => setMaxValue(e.target.value)} placeholder="100" className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-inherit text-white w-[10rem]"/>
            </div>             
          </nav>
          </div>
          <div className="w-max h-[50rem] flex flex-wrap ml-24 gap-8">
                
                {filteredData.map((player) => {
                    return(
                        <div key={player.id} >
                            <div className="w-[15rem] h-[20rem] rounded-lg shadow-xl bg-gray-400 hover:cursor-pointer relative">
                                <Image layout="fill" objectFit="cover" alt={player.name} src={player.urlImage} style={{borderRadius: '0.5rem'}} />
                                <div className="absolute z-10 bottom-0 w-full h-[5rem] rounded-bl-lg rounded-br-lg bg-gradient-to-b from-black to-slate-900 opacity-75 flex flex-col justify-center items-start pl-4">
                                    <div className="text-white text-sm">
                                        Nome: {player.name}
                                    </div>
                                    <div className="text-white text-sm">
                                        Pontos: {player.score}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
          </div>
        </div>
       
        </main>
    )
}