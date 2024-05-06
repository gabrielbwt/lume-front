import Image from "next/image";


interface InfoCardMainProps{
  player:{
    name: string;
    score: number;
    urlImage: string;
    team: string;
  },
  position: string;
}

export default function InfoCardMain({position, player}:InfoCardMainProps){
    return(
        <div className="h-[5rem] mb-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:cursor-pointer flex items-center">
             <div className="w-[12%] text-white flex items-center justify-center">
                {position}
              </div>
              <div className="w-[20%] text-white flex items-center justify-center">
                <div className="h-[5rem] w-[5rem] flex items-center justify-center">
                  <Image alt={player.name} src={player.urlImage} width={100} height={100} objectFit="cover" style={{borderRadius: '50%', width: '4rem', height:'4rem', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="w-[28%] text-white flex items-center justify-center">
                {player.name}
              </div>
              <div className="w-[20%] text-white flex items-center justify-center text-center">
                {player.team}
              </div>
              <div className="w-[20%] text-white flex items-center justify-center">
                {player.score}
              </div>
        </div>
    )
}