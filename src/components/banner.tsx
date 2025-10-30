interface BannerProps{
    image: string;
    title: string
    message: string
    link:string
}
function Banner({image,title,message,link}:BannerProps){
    return(
        <section className="flex w-full max-h-[900px] h-[780px] md:h-152 bg-no-repeat bg-cover bg-center hover:brightness-110 transition duration-300 ease-in-out"
            style={{ backgroundImage: `url(${image})` }}>
            <div className="flex flex-col gap-8 w-full justify-around align-center items-center ">
                <div className="flex flex-col justify-center items-center">
                    <span className="font-[inter] font-bold text-7xl text-[#FFAC53] mt-10">{title}</span>
                    <div className=" max-w-420"><span className="flex text-center font-[inter] font-regular text-2xl p-20 text-[#FAFAFA]">{message}</span></div>
                    </div>
                <div className=" max-w-420"><span className="flex text-center font-[inter] font-regular text-2xl text-[#f0f0f0]">Alguma dúvida? <a className="text-[#FFAC53]  font-[inter]" href={link}>‎ Entre em contato</a></span></div>
            </div>
        </section>
    )
}

export default Banner