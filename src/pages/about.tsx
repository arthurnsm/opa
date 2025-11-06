import PageTransition from "../components/transition";
import Banner from "../components/banner";
import { Ambulance } from 'lucide-react';
import AboutCards from "../components/about-cards";
import { HouseHeart, HeartPlus,PawPrint, ChartNoAxesCombined,School       } from 'lucide-react';
function About(){
    
    return(
    <PageTransition>
        <div className="flex w-full flex-col">
        <Banner link="" title="Eventos" 
        message="
        A Organização Protetora dos Animais é um farol de esperança e um movimento de compaixão em ação. Nascemos em 2019, da união de um pequeno grupo de amigos que não podia mais assistir passivamente à situação de abandono e maus-tratos de tantos animais em nossa comunidade. O que começou com resgates independentes e lares temporários improvisados, rapidamente cresceu para se tornar uma organização sem fins lucrativos, dedicada a dar voz e uma segunda chance a quem não pode pedi-la. Somos movidos pela paixão e pelo compromisso de construir um futuro mais gentil para todos os seres vivos.
        " image="../images/events.png"/>
        <div className="flex w-full justify-center "><span className="font-[inter] font-bold text-7xl  m-40">Nossa Missão</span></div>
        <div className="flex w-full justify-center align-center py-10 text-center flex-row">


            <div className="flex w-1/3 justify-center align-center items-center text-center">
            <AboutCards description="Remover animais de situações de abandono, risco e maus-tratos." Icon={Ambulance} message="Resgatar"/>
            
            </div>

            <div className="flex w-1/3 justify-center align-center items-center text-center">
            <AboutCards description="Oferecer cuidados veterinários completos tratamentos de emergência, vacinação e castração." Icon={HeartPlus } message="Reabilitar"/>
            </div>



            <div className="flex w-1/3 justify-center align-center items-center text-center">
            <AboutCards description="Encontrar lares seguros, responsáveis e amorosos através de um processo de adoção consciente." Icon={HouseHeart } message="Reintroduzir"/>
            </div>
        </div>

        <div className="flex w-full justify-center "><span className="font-[inter] font-bold text-7xl  m-40">Cases de Sucesso</span></div>
        <div className="flex w-full justify-center align-center py-10 text-center flex-row">


            <div className="flex w-1/3 justify-center align-center items-center text-center">
            <AboutCards description="Animais Resgatados Desde a nossa fundação." Icon={PawPrint } message="Mais de 100+"/>
            
            </div>

            <div className="flex w-1/3 justify-center align-center items-center text-center">
            <AboutCards description="Animais Reabilitados e Adotados." Icon={ChartNoAxesCombined  } message="Mais de 60%"/>
            </div>



            <div className="flex w-1/3 justify-center align-center items-center text-center">
            <AboutCards description="Permanecem em seus lares por mais de 1 ano" Icon={School } message="90% das adoções" />
            </div>
        </div>
        </div>
    </PageTransition>)
}
export default About;