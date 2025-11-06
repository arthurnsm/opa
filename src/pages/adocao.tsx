import PageTransition from "../components/transition";
import Banner from '../components/banner'
import Animals from "../animals";


function Adocao(){
    return(
    <PageTransition>
        <Banner link="" title="Adoção Responsável" message="Adotar um animal é abrir seu coração e seu lar para uma vida que precisa de uma segunda chance. Na O.P.A., acreditamos que cada animal merece um lar seguro, amoroso e para sempre. Por isso, nosso processo de adoção é pensado para garantir que tanto o animal quanto o adotante estejam prontos para essa nova jornada. A adoção responsável significa entender que a decisão de adotar vai muito além da emoção inicial. É um compromisso para toda a vida do animal, que pode durar muitos anos, envolve proporcionar amor, cuidado, paciência e compreensão
        " image="../images/man_dog.png"/>
        <section className="flex align-center justify-center mt-4">
            <div className="flex flex-col">
                <div>
                    <Animals/> 
                </div>

            </div>
        </section>
    </PageTransition>
    )
}

export default Adocao;