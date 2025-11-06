import React from 'react';
import type { Animal } from '../types';
import { getBgColorClass } from '../utils/colorUtils';

interface AnimalCardProps {
  animal: Animal;
}

const normalizeString = (str: string | null) => 
  str?.trim()
     .toLowerCase()
     .normalize("NFD")
     .replace(/[\u0300-\u036f]/g, "") ?? "";

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
    const statusNormalizado = normalizeString(animal.disponibilidade);
    const isDisponivel = statusNormalizado === 'disponivel';
    const availabilityBaseClasses = "mt-4 rounded-full py-2 px-2 text-center font-bold text-sm text-white shadow-md";
    const availabilityDynamicClasses = isDisponivel 
    ? "bg-green-600 "
    : "bg-red-400 ";
    
    var locked= 'flex border-3 rounded-2xl w-60 h-auto text-center align-center justify-center md:shadow-2xl py-4 duration-300 ease-in-out hover:scale-[1.1] transition hover:cursor-pointer  '
    var label = 'Tenho Interesse'
    if  (statusNormalizado == 'disponivel'){
        locked
        }
    else {
        locked = "opacity-30 flex border-3 pointer-events-none border-[#666464] text-[#666464] rounded-2xl w-60  text-center align-center justify-center  py-4 hover:cursor-default"
        label = 'Indisponivel'
    }


  const bgColorClass = getBgColorClass(animal.cor);

  const isEven = animal.idAnimal !== null && animal.idAnimal % 2 === 0;
  const link = `Olá,%20fiquei%20interessado%20no%20${animal.nome}%20e%20gostaria%20de%20saber%20mais%20sobre%20ele!`
  
  return (
    <div className="m-2 w-full justify-center items-center align-center p-38">
      

      <div className={`flex ${isEven ?  'flex-row-reverse' : ' flex-row'}`}>

        <div className="flex ">
          {animal.fotoUrl ? (
            <img 
              src={animal.fotoUrl} 
              alt={`Foto de ${animal.nome}`} 
              className="h-full w-[600px] object-cover rounded-2xl" 
            />
          ) : (
            <div className="grid h-full w-full">
              <p>Sem foto</p>
            </div>
          )}
        </div>

        <div className="w-1/2 p-4 flex flex-col justify-center gap-10 ">
          
          <h3 className={` ${isEven ?  'text-end' : 'text-start'} " font-bold font-[Lexend Deca] text-[70px]  "`}>{animal.nome || 'Sem Nome'}</h3>
          
          {animal.descricao && (
            <p className={` ${isEven ?  'text-end' : 'text-start'} mt-2 text-sm text-[20px]  text-black`}>
              {animal.descricao}
            </p>
          )}
                    {animal.cor && (
                        <div className={`flex ${isEven ?  'justify-end' : 'justify-start'}  flex items-center gap-2`}>
                        <strong className="text-sm font-medium text-black">Cor:</strong>
                        <div title={animal.cor} className={`h-5 w-5 rounded-full ${bgColorClass}`}></div>
                      </div>
                    )}
          


          <div className={` ${isEven ?  'justify-end' : 'justify-start'} flex w-full `}>

          <div className={`${locked} `} >
            <a    href={link} target="_blank" rel="noopener noreferrer" className=' flex flex-row justify-center items-center  gap-2 '>
                <span className='font-medium font-[inter] text-[25px]'>
                   {label} 
                </span>
            </a>

          </div>
          </div>
        </div>
        </div>
      </div>
      
  );
}