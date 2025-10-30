interface MainButtonProps{
    message: string,
    onClick: () => void;
}

function MainButton ({message, onClick}:MainButtonProps){
    return (
    <button  onClick={onClick} className="w-1/2 h-auto rounded-3xl duration-300 ease-in-out justify-center items-center text-center hover:scale-[1.1] md:p-2 bg-[#F7941D] text-white font-[inter] text-3xl font-semibold hover: transition hover:cursor-pointer" >{message}</button>
    )
}

export default MainButton