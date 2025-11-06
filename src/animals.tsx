// src/App.tsx
import { useAnimals } from './hooks/useAnimals';
import { AnimalCard } from './components/animalCard';
import './App.css'; // (Seu CSS para o grid)

function Animals() {
  const { animals, loading, error } = useAnimals();

  if (loading) {
    return <div>Carregando animais...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Erro ao buscar dados: {error}</div>;
  }

  return (
    <div className='flex w-full justify-center text-center flex-col'>
      <span className="font-[inter] font-bold text-7xl  m-40">Conheça Nossos Amigos</span>
      <div className="animal-grid">        
        {animals.length > 0 ? (
          animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))
        ) : (
          <p>Nenhum animal encontrado no banco de dados.</p>
        )}
      </div>
    </div>
  );
}

export default Animals;