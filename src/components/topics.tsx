import {MoveRight} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { RefObject } from "react";

interface TopicsProps{
    title:string
    message: string
    link: string
    numero: number
    scrollRef?: RefObject<HTMLDivElement | null>; 
    img: string
}

function Topics({title,message,link, numero, scrollRef,img}:TopicsProps){
const isPar = numero % 2 === 0;


    return(
    <div  className='flex flex-col md:gap-18 gap-10 '>
    <div className='flex flex-row justify-center w-screen'>
        <span ref={scrollRef} className='font-[Lexend Deca] font-bold text-7xl'>{title}</span>
    </div>    
    <div className={`flex w-full md:px-20  ${isPar ? 'flex-row-reverse' : 'flex-row'} gap-8`}>
        

        <div className="flex flex-col gap-8 w-full  justify-center">
            <span  className={`text-2xl md:text-xl font-inter font-regular ${isPar ? 'text-start' : 'text-end'}`}>{message}</span>
            <div className={`flex flex-row justify-end ${isPar ? 'justify-start' : 'justify-end'}`}>
                <Link to={link} className="flex md:shadow-2xl duration-300 ease-in-out justify-center align-center gap-2 items-center max-w-100 md:w-46 md:text-2xl text-3xl font-[inter] rounded-2xl h-full py-3 px-4 border-4 border-black hover:scale-[1.1] transition hover:cursor-pointer">
                    Ver Mais<MoveRight className='md:w-8 md:h-6'/>
                </Link>
            </div>
        </div>
        <div className="flex md:w-150 md:h-110  max-w-[600px]  bg-[#EBEBEB] rounded-4xl" ><img src={img} className=' rounded-4xl md:w-150 md:h-110 max-w-[600px] object- aspect-auto ' alt="seila" /></div>
    
    </div>
    </div>
    )
}


export default Topics