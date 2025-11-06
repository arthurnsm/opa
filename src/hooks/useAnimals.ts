import { useState, useEffect } from 'react';
import type { Animal } from '../types'; 

function parseNotionAnimal(rawAnimal: any): Animal {
  const properties = rawAnimal.properties;
  
  const idAnimal = properties.Id?.number ?? null;
  const nome = properties.Nome?.title[0]?.plain_text ?? null;
  const fotoUrl = properties.Foto?.files[0]?.file?.url ?? 
                properties.Foto?.files[0]?.external?.url ?? null;
  const disponibilidade = properties.Disponibilidade?.select?.name ?? null;
  const especie = properties.Espécie?.select?.name ?? null;
  const cor = properties['Cor']?.rich_text[0]?.plain_text ?? null;
  
  const descricao = properties['Descrição']?.rich_text[0]?.plain_text ?? null;

  return {
    id: rawAnimal.id,
    idAnimal,
    nome,
    fotoUrl,
    disponibilidade,
    especie,
    cor,
    descricao, // <-- MUDANÇA: Adicionado ao objeto
  };
}

// O Hook principal (sem mudanças no corpo principal)
export function useAnimals() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null); 
        
        const response = await fetch('/api/getanimals'); 

        if (!response.ok) {
          try {
            const errorData = await response.json();
            throw new Error(errorData.details || 'Falha ao buscar dados.');
          } catch (jsonError: any) {
            throw new Error(`Falha na rede ou rota não encontrada (Status: ${response.status}).`);
          }
        }

        const data = await response.json();
        const parsedAnimals = (data.results as any[]).map(parseNotionAnimal);
        setAnimals(parsedAnimals); 

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []); 

  return { animals, loading, error };
}