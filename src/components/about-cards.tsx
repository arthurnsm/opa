import type { LucideIcon } from "lucide-react"
    interface AboutCardsProps{
        Icon: LucideIcon,
        description: string
        message: string
    }

function AboutCards({Icon, message, description}:AboutCardsProps){
    return(
            <div className="flex justify-center align-center items-center flex-col ">
                <div className="flex">

                <Icon size={150} className="text-[#FEB229]"/>
                </div>
                <div className="flex justify-center mt-4"><span className="font-[inter] text-[#FEB229] font-bold text-5xl">{message}</span></div>
                <div className="flex mt-10  w-100 text-center justify-center" >
                    <span className="font-[inter] font-medium text-lg">{description}</span>
                </div>
            </div>
    
    )
}

export default AboutCards;