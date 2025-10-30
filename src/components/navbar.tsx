import Whatsapp from '../../public/icon/whatsapp.png'
import Instagram from '../../public/icon/instagram_icon.png'
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom'

function Navbar (){

    return(
        <nav>
        <div className="flex w-full py-4 items-center bg-[#e4e4e4] justify-between">
        <div className="flex">
            <Link to='/' className='px-8'>Logo</Link>
        </div>
        <div className="md:flex hidden gap-20 justify-center align-center items-center ">
            <Link to="/sobre" className='flex font-[inter] hover:text-amber-700 transition md:text-sm lg:text-xl text-center justify-center '>Sobre a  O.P.A</Link>
            <Link to="/eventos" className='flex font-[inter] hover:text-amber-700 transition md:text-sm lg:text-xl text-center justify-center '>Eventos</Link>
            <Link to="/doacao" className='flex font-[inter] hover:text-amber-700 transition md:text-sm lg:text-xl text-center justify-center '>Contribuir</Link>
            <Link to="/adocao" className='flex font-[inter] hover:text-amber-700 transition md:text-sm lg:text-xl text-center justify-center '>Adoção</Link>
        </div>
        <div className='md:flex hidden gap-6 mx-14'>
            <a href='' ><img alt="Logo do Instagram" src={Instagram} className='w-10'/></a>
            <a href='' ><img alt="Logo do Whatsapp"src={Whatsapp} className='w-9'/></a>
        </div>
        <div className='flex md:hidden mx-4'>
            <Menu size={35} strokeWidth={2.5} />
        </div>
        </div>
        </nav>
    )
}

export default Navbar;