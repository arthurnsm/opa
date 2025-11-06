// src/types.ts

export interface Animal {
  id: string; // ID da página do Notion
  idAnimal: number | null; // Seu campo "Id" (número)
  nome: string | null;
  fotoUrl: string | null;
  disponibilidade: string | null;
  especie: string | null;
  cor: string | null;
  descricao: string | null; // <-- MUDANÇA: Adicionamos o novo campo
}