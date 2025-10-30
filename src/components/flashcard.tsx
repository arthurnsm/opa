import type { LucideIcon } from "lucide-react"
    interface FlashcardProps{
        Icon: LucideIcon,
        mainmessage: string,
        message: string
    }
function FlashCard({Icon, mainmessage, message}:FlashcardProps){

    return (
        <div className="">

        <div className="flex flex-col max-w-70 p-2 md:flex-row md:p-4 align-center hover:cursor-pointer hover:-translate-y-4 md:shadow-2xl duration-300 ease-in-out transition items-center justify-center gap-2 rounded-[35px] bg-white">
            <div>
            <Icon className="w-9 h-8 md:w-12 md:h-12"/>
            </div>
            <div className="flex flex-col">
                <span className="text-[#DF7F19] text-center md:text-start font-[inter] font-bold text-sm md:text-lg">{mainmessage}</span>
                <span className=" font-[inter] text-center font-light text-sm md:text-lg">{message}</span>
            </div>

        </div>
        </div>
    )
}


export default FlashCard