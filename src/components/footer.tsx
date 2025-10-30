import Whatsapp from '../../public/icon/whatsapp.png'
import Instagram from '../../public/icon/instagram_icon.png'
import QRcode from '../../public/images/qr-code.png'
import { Copy } from 'lucide-react';

function Footer(){
    return(
    <div className="flex w-full  align-center  justify-center px-30 bg-[#FFEDC1]">

        <div className=" flex w-1/3 py-10">
        <div className="flex flex-col justify-between gap-20">
                <div>
                 <span className="font-[inter] text-[#FEB229] font-bold text-6xl md:text-5xl">Organização<br/> Protetora dos <br/> Animais</span>
                </div>
                <div className='flex flex-col gap-4 py-4'>
                       <a href='' className='flex flex-row gap-2' >
                            <img alt="Logo do Instagram" src={Instagram} className='w-10'/>
                            <span className='font-[inter] text-2xl'>@instagram.com</span>
                        </a>
                        <a href='' className='flex flex-row gap-2' >
                            <img alt="Logo do Instagram" src={Whatsapp} className='w-9'/>
                            <span className='font-[inter] text-2xl'>(16)1234-5678</span>
                        </a>

                </div>
        </div>

        </div>

<div className="flex flex-col justify-end w-1/3 ">
        <span className="font-[inter] text-sm font-light">Organização Protetora dos Animais © Todos os direitos reservados </span>
</div>


<div className="flex flex-col items-center justify-center p-8 w-1/3 ">
        <div className='flex'><span className='font-[inter] text-[#FEB229] font-bold text-4xl'>Doe pelo QR code</span></div>
        <img src={QRcode}></img>
        <div>
            <button className='flex gap-2 bg-[#DF7F19] text-2xl font-[inter] text-white py-4 text-center justify-center rounded-3xl items-center px-4'>
                Copiar código pix <Copy/>
            </button>
        </div>
</div>


    </div>
    
)
}


export default Footer