import { Client } from "@notionhq/client";

const notion = new Client({
  auth: import.meta.env.VITE_NOTION_TOKEN,
});

const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID;

export interface Animal {
  id: string;
  nome: string;
  cor: string;
  raca: string;
  foto: string | null;
}

export async function getAnimais(): Promise<Animal[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const animais: Animal[] = response.results.map((page: any) => {
    const props = page.properties;

    return {
      id: page.id,
      nome: props.Nome?.title?.[0]?.plain_text || "Sem nome",
      cor: props.Cor?.select?.name || "Desconhecida",
      raca: props.Raça?.rich_text?.[0]?.plain_text || "Desconhecida",
      foto:
        props.Foto?.files?.[0]?.file?.url ||
        props.Foto?.files?.[0]?.external?.url ||
        null,
    };
  });

  return animais;
}
