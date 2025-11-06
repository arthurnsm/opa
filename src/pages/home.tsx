import FlashCard from "../components/flashcard";
import { PawPrint, HouseHeart  } from 'lucide-react'
import MainButton from '../components/main-button'
import SecondaryButton from "../components/secondary-button";
import Topics from "../components/topics";
import Dog1 from '../../public/images/dog1.png'
import Dog2 from '../../public/images/dog2.png'
import Dog3 from '../../public/images/dog3.png'
import Dog4 from '../../public/images/dog4.png'
import { useRef } from "react";



function Home() {

  const donateRef = useRef<HTMLDivElement>(null);

  const scrollToDonate = ()=>{
    donateRef.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <div className="">
      <div className="flex flex-col md:flex-row  h-screen bg-center bg-cover bg-no-repeat md:bg-top md:w-full md:h-[1000px] bg-[url('/images/dog_hero-mobile.png')] md:bg-[url('/images/dog_hero.png')]">
      <div className="md:w-1/2 h-screen w-full md:p-20 gap-8 p-8 flex md:flex-col justify-around">

      <div className="flex justify-end">
        <FlashCard Icon={PawPrint} mainmessage="100+ Animais" message="Resgatados pela O.P.A"/>
      </div>

      <div className="flex">
        <FlashCard Icon={HouseHeart} mainmessage="20+ Adoções" message="Mediadas pela O.P.A"/>  
      </div>

        </div>
      <div className="flex md:w-1/2 w-full  h-screen flex-col align-center items-center justify-center">
      <div className="flex flex-col gap-8">

        <div>

        <span className="font-[inter] text-[#FEB229] font-bold text-6xl md:text-7xl ">Organização<br/> Protetora dos <br/> Animais</span>
        </div>
        
        <div className="max-w-160">
          <span className="text-white font-[inter] md:text-2xl font-medium ">Uma Organização Não Governamental que coleciona histórias felizes. Conheça a nossa missão de dar uma nova chance a quem precisa.</span>
        </div>

        <div className="flex gap-8">
        <MainButton onClick={scrollToDonate} message="Como Ajudar?"/>
        <SecondaryButton message="Conheça a ONG" link="f"/>
        </div>

        </div>
        </div>
      </div>


      <section className="flex flex-col align-center items-center justify-center mt-32 gap-60">
        <Topics img="../images/about-min-size.png" numero={1} link="/sobre" title="Oque é a O.P.A?" message="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."/>
        <Topics img="../images/events-min-size.png" numero={2} link="/eventos" title="Eventos que participamos" message="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."/>
        <Topics scrollRef={donateRef} img="../images/donate-min-size.png" numero={3} link="/doacao" title="Como contribuir com a O.P.A?" message="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."/>
        <Topics img="../images/man-dog-min-size.png" numero={4} link="/adocao" title="Adote um companheiro" message="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."/>
      </section>
      <div className="flex flex-row mt-60 w-full">
        <img className="flex w-full " src={Dog1}/>
        <img className="flex w-full " src={Dog2}/>
        <img className="flex w-full " src={Dog3}/>
        <img className="flex w-full " src={Dog4}/>    
      </div>

    </div>
  );
}

export default Home;