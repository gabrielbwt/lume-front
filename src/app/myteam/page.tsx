"use client"

import { data } from "@/utils/data"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { useState } from "react"
import Image from "next/image"
import ReactEcharts from 'echarts-for-react';
import Menu from "@/components/Menu/Menu"
import WalletSVG from '../../../public/Wallet.svg'
import Arrow from '../../../public/Arrow.svg'

export default function MyTeam(){

    const players = [data[0], data[3], data[5], data[6]].sort((a,b) => b.score - a.score)

    const [tabSelected, setTabSelected] = useState('myplayers')

    const percentage = 83
    const complementar = 1 - Number(percentage) / 100;
    const dashoffset = 376.99 * complementar;

    const pontos = players.reduce((acc, curr) => acc + curr.score, 0);
    const pontosTop3 = players.slice(0, 3).reduce((acc, curr) => acc + curr.score, 0);

    return(
        <main className="min-h-screen h-auto w-full min-w-[390px] flex items-center flex-col">
             <Menu />
            <section className="h-[10rem] items-center flex relative">
                <div className="w-screen h-[1rem] bg-white">
                    <div className="flex absolute bottom-0 m-autoabsolute top-1/2 left-[4rem] transform -translate-y-1/2 h-[6rem]">
                        <Image alt='' src="https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png" width={100} height={100} style={{width: '5rem', height:'auto'}} />
                    </div>
                </div>
            </section>

            <section className="w-full h-[10rem]">
                <div className=" ml-16 mt-4">
                <Tabs className="w-[40rem]" value={tabSelected}>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="myplayers" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white" onClick={() => setTabSelected('myplayers')}>Meus atletas</TabsTrigger>
                    <TabsTrigger value="data" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white" onClick={() => setTabSelected('data')}>Dados</TabsTrigger>
                </TabsList>
                <TabsContent className="w-[calc(100vw-8rem)]"   value="myplayers">
                    <div className="flex justify-between">
                    <section className="w-[40rem]">
                    <div className="flex items-center w-full border-b border-gray-300 mt-6 mb-4">
                        <div className=" w-[15%] text-white flex items-center justify-center">
                            Posição
                        </div>
                        <div className="w-[25%]">

                        </div>
                        <div className="w-[35%] text-white flex items-center justify-center">
                            Nome
                        </div>
                        <div className="w-[25%] text-white flex items-center justify-center">
                            Pontos
                        </div>
                        </div>
                        <div className="h-[23rem] overflow-y-scroll">
                        {players.map((player, index) => {
                            return(
                                <div key={player.id} className="flex items-center justify-start gap-4 bg-slate-800 mb-4 pb-4 pt-4 rounded-xl text-white w-[100%]">
                                    <div className="w-[15%] items-center justify-center flex">{index + 1}</div>
                                    <div className="w-[25%] items-center justify-center flex">
                                    <Image alt={player.name} src={player.urlImage} width={100} height={100} objectFit="cover" style={{borderRadius: '50%', width: '4rem', height:'4rem', objectFit: 'cover'}} />
                                    </div>
                                    
                                    <div className="w-[30%] items-center justify-center flex">{player.name}</div>
                                    <div className="w-[25%] items-center justify-center flex">{player.score}</div>
                                </div>
                            )
                        })}
                        </div>
                        <div className="flex gap-4">
                        <div className="bg-gray-300 mt-11 rounded-xl h-[15rem] w-[27rem] flex items-center pl-16 relative">
                        <div className="absolute top-4 left-4 tex-slate-800 font-semibold">
                                Porcentagem de Vitórias
                            </div>
                            <div className="flex absolute top-1/2 transform -translate-y-1/2 left-[9.3rem] ml-[-4.5rem] mt-[1rem] text-[#343E76] font-semibold text-lg">
                                {percentage}%
                            </div>
                            
                            <svg width="200" height="200" className="-rotate-90 ml-[-4.5rem] mt-[2rem]">
                                <circle cx="100" cy="100" r="60" stroke="#D1D5DA" stroke-width="20" fill="none" stroke-linecap="round" />
                                <circle cx="100" cy="100" r="60" stroke="#343E76" stroke-width="20" fill="none" stroke-dasharray="376.99" stroke-dashoffset={dashoffset} stroke-linecap="round" />
                            </svg>
                            <div className="flex flex-col gap-4  ml-[-1rem] mt-[2rem]">
                            <div className="flex justify-around items-center bg-[#343E76] pl-5 pr-5 rounded-xl gap-2 text-white">
                                <div>Número de Partidas:</div>
                                <div>60</div>
                            </div>
                            <div className="flex justify-around items-center bg-[#343E76] pl-5 pr-5 rounded-xl gap-2 text-white">
                                <div>Número de Vitórias:</div>
                                <div>50</div>
                            </div>
                            <div className="flex justify-around items-center bg-[#343E76] pl-5 pr-5 rounded-xl gap-2 text-white">
                                <div>Número de Derrotas:</div>
                                <div>10</div>
                            </div>
                            </div>
                        </div>

                        <div className="bg-gray-300 mt-11 rounded-xl h-[15rem] w-[12rem] flex items-center relative">
                            
                            <div className="absolute top-4 left-4 text-sm tex-slate-800 font-semibold">
                                Média de Pontos (Time)
                            </div>

                            <div className="text-xl justify-center items-center flex w-full absolute top-16 ">
                            {(pontos / players.length).toFixed(0)}
                            </div>

  
                            <div className="absolute text-sm top-30 left-4 tex-slate-800 font-semibold">
                                Média de Pontos (Top 3)
                            </div>
                            <div className="text-xl justify-center items-center flex w-full absolute top-40">
                            {(pontosTop3 / 3).toFixed(0)}

                            </div>
                        </div>
                        </div>
                    </section>
                    
                    <section className="w-[calc(100%-45rem)] h-[45rem] mt-8 gap-[3rem] flex flex-col">
                        <div className="bg-gray-300 h-[20rem] rounded-xl pt-6 relative">
                            <div className="absolute top-4 left-4 tex-slate-800 font-semibold">
                                Pontuação por Temporada
                            </div>
                        <ReactEcharts
                            // style={{ height: '232px', width: '684px' }}
                            option={getOption(['20.1', '20.2', '21.1', '21.2', '22.1', '22.2', '23.1', '23.2', '24.1'], [650, 940, 820, 700, 940, 800, 742, 943, 620])}
                        />
                        </div>
                        <div className="bg-gray-300 h-[20rem] rounded-xl pt-6 relative">
                            <div className="absolute top-4 left-4 tex-slate-800 font-semibold">
                                Vitórias por Temporada
                            </div>
                        <ReactEcharts
                            // style={{ height: '232px', width: '684px' }}
                            option={getOption2(['20.1', '20.2', '21.1', '21.2', '22.1', '22.2', '23.1', '23.2', '24.1'], [32, 47, 41, 35, 47, 40, 37, 47, 31])}
                        />
                        </div>
                    </section>
                    </div>
                </TabsContent>
                <TabsContent className="w-[calc(100vw-8rem)]"   value="data">
                    <div className="flex justify-between">
                    <section className="w-[40rem]">


                        <div className="flex items-center justify-center gap-4 bg-slate-800 mb-4 pb-4 pt-4 rounded-xl text-white w-[20rem] h-[5rem] mt-8 ">
                                    <div className="w-[15%] items-center justify-center flex">
                                        <Image alt='' className=" fill-white" src={WalletSVG} width={35}/>
                                    </div>
                                    <div className=" items-center justify-center flex text-xs font-bold">
                                        <div className="mr-4">
                                            Valor do Time:
                                        </div>
                                        <div>
                                            U$ 2.000.000,00
                                        </div>
                                    </div>

 
                                </div>



                        <div className="bg-gray-300 h-[18rem] rounded-xl pt-6 relative">
                            <div className="absolute top-4 left-4 tex-slate-800 font-semibold">
                                Valorização do Time (MM)
                            </div>
                        <ReactEcharts
                            // style={{ height: '232px', width: '684px' }}
                            option={getOption(['20.1', '20.2', '21.1', '21.2', '22.1', '22.2', '23.1', '23.2', '24.1'], [1.8, 1.3, 1.3, 1.7, 1.4, 1.2, 1.7, 1.9, 2])}
                        />
                        </div>
                        <div className="bg-gray-300 h-[16rem] rounded-xl pt-6 relative mt-10">
                            <div className="absolute top-4 left-4 tex-slate-800 font-semibold">
                                Últimas Notícias
                            </div>
                            <div className="flex">
                                <div className="mt-12 ml-8 items-center flex justify-center">
                                    <Image src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/05/04/1621029938-imageplaceholder-1-aspect-ratio-512-320-16.jpg" alt='' width={100} height={100} objectFit="cover" style={{width:'13rem', height:'auto', borderRadius: '1rem'}}/>
                                </div>
                                <div className="flex flex-col justify-center mt-12 ml-4">
                                    <div className="w-[22rem] font-bold text-sm mb-4">
                                    777 Partners, dona da SAF do Vasco, é processada por acusação de fraude na Justiça dos EUA
                                    </div>
                                    <div className="w-[22rem] text-xs">
                                    Empresa norte-americana foi acusada de dar garantias de supostos fundos que não lhe pertencem ou não existem
                                    </div>
                                </div>
                            </div>
                        
                        </div>





                    </section>
                    <section className="w-[calc(100%-45rem)] h-[45rem] mt-8 gap-[3rem] flex flex-col">
                        <div className="bg-slate-800 rounded-xl h-[45rem]">
                            <div className="mt-4 ml-4 font-bold text-white">
                                Últimas Transações
                            </div>
                            <div className="h-[1px] w-full bg-slate-400 mt-4"></div>
                            <div className="flex text-bold font-sm text-white justify-between ml-4 mr-4 mt-4 items-center gap-4">
                                <div className="w-[25%] ml-8 flex justify-center">
                                   Atleta
                                </div>
                                <div className="w-1/4 ml-[5rem] flex justify-center">
                                    Transação
                                </div>
                                <div className="w-[35%] flex justify-center">
                                    Valor
                                </div>
                                <div className="w-1/5 flex justify-center">
                                    Data
                                </div>

                            </div>
                            <div className="h-[1px] w-full bg-slate-400 mt-4"></div>
                            


                        <div className="h-[37.5rem] overflow-y-scroll">
                        {data.map((player, index) => {
                            return(
                                <div key={player.id} className="flex items-center justify-start gap-4 bg-slate-800 mb-4 pb-4 pt-4 rounded-xl text-white w-[100%] ml-4 mr-4 hover:cursor-pointer">
                                    <div className="w-[25%] items-center justify-start ml-8 flex gap-4 pr-[-4rem]"><Image alt={player.name} src={player.urlImage} width={100} height={100} objectFit="cover" style={{borderRadius: '50%', width: '4rem', height:'4rem', objectFit: 'cover'}} /> {player.name}</div>
                                    <div className="w-[25%] items-center justify-center flex gap-4">
                                    <Image alt='' src="https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png" width={100} height={100} style={{width: '2rem', height:'auto'}} />
                                    <Image alt='' src={Arrow} style={{height: 'auto', width: '1.4rem'}} />
                                    <Image alt='' src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Sport_Club_Recife.svg/1200px-Sport_Club_Recife.svg.png"  width={100} height={100} style={{width: '2rem', height:'auto'}} />
                                    </div>
                                    <div className="w-[21%] items-center justify-center flex">
                                        U$ 1.000.000,00
                                    </div>
                                    <div className="w-[1/4%] items-center justify-center flex ml-[5rem]">10/02/2024</div>
                                </div>
                            )
                        })}

                        </div>





                        </div>
                    </section>
                    
                    {/* <section className="w-[calc(100%-45rem)] h-[45rem] mt-8 gap-[3rem] flex flex-col">
                        <div className="bg-gray-300 h-[20rem] rounded-xl pt-6 relative">
                            <div className="absolute top-4 left-4 tex-slate-800 font-semibold">
                                Pontuação por Temporada
                            </div>
                        <ReactEcharts
                            // style={{ height: '232px', width: '684px' }}
                            option={getOption(['20.1', '20.2', '21.1', '21.2', '22.1', '22.2', '23.1', '23.2', '24.1'], [650, 940, 820, 700, 940, 800, 742, 943, 620])}
                        />
                        </div>
                        <div className="bg-gray-300 h-[20rem] rounded-xl pt-6 relative">
                            <div className="absolute top-4 left-4 tex-slate-800 font-semibold">
                                Vitórias por Temporada
                            </div>
                        <ReactEcharts
                            // style={{ height: '232px', width: '684px' }}
                            option={getOption2(['20.1', '20.2', '21.1', '21.2', '22.1', '22.2', '23.1', '23.2', '24.1'], [32, 47, 41, 35, 47, 40, 37, 47, 31])}
                        />
                        </div>
                    </section> */}
                    </div>
                </TabsContent>
            </Tabs>
            </div>
            </section>
        </main>
    )
}

function getOption(xAxis: string[], yAxisPoints: number[]) {
    const maxValue = Math.max(...yAxisPoints);

    const newArray: number[] = [];

yAxisPoints.forEach((value, index) => {
    if (index === 0) {
        newArray.push(0);
    } else {
        newArray.push(value - yAxisPoints[index - 1]);
    }
});
    const minValue = Math.min(...newArray);
    const symetricalLimit = Math.max(Math.abs(maxValue), Math.abs(minValue));

    return {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999',
                },
            },
        },
        toolbox: {
            feature: {
                dataView: { show: false, readOnly: false },
                magicType: { show: false, type: ['line', 'bar'] },
                restore: { show: false },
                saveAsImage: { show: false },
            },
        },
        legend: {
            show: true,
            data: ['Pontos', 'Variação'],
            textStyle: {
                fontSize: 11,
                color: '#23262f',
            },
        },

        xAxis: [
            {
                type: 'category',
                data: xAxis,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    show: true,
                    interval: 0
                },
                splitLine: { show: false },
            },
        ],
        yAxis: [
            {
                type: 'value',
                min: minValue,
                max: symetricalLimit,
                axisLine: { show: true },
                axisTick: { show: true },
                axisLabel: { show: true },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#2D5557',
                    },
                },
                splitNumber: 1,
            },
        ],
        series: [
            {
                name: 'Variação',
                type: 'line',
                data: newArray,
                lineStyle: {
                    color: '#2D5557',
                },
                itemStyle: {
                    color: '#2D5557',
                },
            },
            // {
            //     name: 'Gasto',
            //     type: 'bar',
            //     stack: 'Total',
            //     label: {
            //         show: false,
            //         position: 'bottom',
            //     },
            //     itemStyle: {
            //         color: '#F54F4F',
            //         barBorderRadius: [0, 0, 5, 5],
            //     },
            //     data: yAxisSpend.map((value) => -value),
            // },
            {
                name: 'Pontos',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top',
                },
                itemStyle: {
                    color: '#5E62E5',
                    barBorderRadius: [5, 5, 0, 0],
                },
                data: yAxisPoints,
            },
        ],
    };
}

function getOption2(xAxis: string[], yAxisPoints: number[]) {
    const maxValue = Math.max(...yAxisPoints);

    const newArray: number[] = [];

yAxisPoints.forEach((value, index) => {
    if (index === 0) {
        newArray.push(0);
    } else {
        newArray.push(value - yAxisPoints[index - 1]);
    }
});
    const minValue = Math.min(...newArray);
    const symetricalLimit = Math.max(Math.abs(maxValue), Math.abs(minValue));

    return {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999',
                },
            },
        },
        toolbox: {
            feature: {
                dataView: { show: false, readOnly: false },
                magicType: { show: false, type: ['line', 'bar'] },
                restore: { show: false },
                saveAsImage: { show: false },
            },
        },
        legend: {
            show: true,
            data: ['Vitórias', 'Variação'],
            textStyle: {
                fontSize: 11,
                color: '#23262f',
            },
        },

        xAxis: [
            {
                type: 'category',
                data: xAxis,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    show: true,
                    interval: 0
                },
                splitLine: { show: false },
            },
        ],
        yAxis: [
            {
                type: 'value',
                min: minValue,
                max: symetricalLimit,
                axisLine: { show: true },
                axisTick: { show: true },
                axisLabel: { show: true },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#2D5557',
                    },
                },
                splitNumber: 1,
            },
        ],
        series: [
            {
                name: 'Variação',
                type: 'line',
                data: newArray,
                lineStyle: {
                    color: '#2D5557',
                },
                itemStyle: {
                    color: '#2D5557',
                },
            },
            // {
            //     name: 'Gasto',
            //     type: 'bar',
            //     stack: 'Total',
            //     label: {
            //         show: false,
            //         position: 'bottom',
            //     },
            //     itemStyle: {
            //         color: '#F54F4F',
            //         barBorderRadius: [0, 0, 5, 5],
            //     },
            //     data: yAxisSpend.map((value) => -value),
            // },
            {
                name: 'Vitórias',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top',
                },
                itemStyle: {
                    color: '#30396C',
                    barBorderRadius: [5, 5, 0, 0],
                },
                data: yAxisPoints,
            },
        ],
    };
}