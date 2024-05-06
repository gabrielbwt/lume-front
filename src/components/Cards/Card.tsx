import Image from "next/image";

interface CardProps {
    player: {
        name: string;
        score: number;
        urlImage: string;
        team: string;
    };
}

export default function Card({ player }: CardProps) {
    return (
        <div className="w-[25rem] h-[25rem] rounded-lg shadow-xl bg-gray-400 hover:cursor-pointer relative">
            <Image alt={player.name} src={player.urlImage} layout="fill" objectFit="cover" style={{borderRadius: '0.5rem'}} />
            <div className="absolute z-10 bottom-0 w-full h-[5rem] rounded-bl-lg rounded-br-lg bg-gradient-to-b from-black to-slate-900 opacity-75 flex flex-col justify-center items-start pl-4">
                <div className="text-white text-sm">
                    Nome: {player.name}
                </div>
                <div className="text-white text-sm">
                    Pontos: {player.score}
                </div>
            </div>
        </div>
    );
}
