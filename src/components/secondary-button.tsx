interface SecondaryButtonProps{
    message: string,
    link: string,
}
import { Link } from 'react-router-dom'

function SecondaryButton ({message, }:SecondaryButtonProps){
    return (
    <Link to='/sobre' className="w-1/2 h-auto rounded-3xl justify-center items-center text-center hover:scale-[1.1] p-6 border-2 border-[#F7941D] text-white font-[inter] text-3xl font-semibold hover: transition hover:cursor-pointer" >{message}</Link>
    )
}

export default SecondaryButton