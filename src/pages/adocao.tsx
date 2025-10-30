import PageTransition from "../components/transition";
import Banner from '../components/banner'
import Teste from "./teste";

function Adocao(){
    return(
    <PageTransition>
        <Banner link="" title="Adoção Responsável" message="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" image="../images/man_dog.png"/>
        <section className="flex align-center justify-center mt-40">
            <h1 className="fontt-[inter] text-6xl font-bold">Conheça nossos amigos</h1>
            <div className="flex flex-col">
                <div>
                    <Teste />
                </div>

            </div>
        </section>
    </PageTransition>
    )
}

export default Adocao;