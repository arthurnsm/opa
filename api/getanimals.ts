import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';

export default async function handler(
  _request: VercelRequest, // <-- alterado
  response: VercelResponse
) {
  try {
    const NOTION_KEY = process.env.NOTION_API_KEY;
    const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID; 

    if (!NOTION_KEY || !NOTION_DATABASE_ID) {
      return response.status(500).json({ 
        error: 'Chaves do Notion não configuradas no .env.',
        details: 'Certifique-se que NOTION_API_KEY e NOTION_DATA_SOURCE_ID estão lá.'
      });
    }

    const notion = new Client({
      auth: NOTION_KEY,
      notionVersion: "2022-06-28" 
    });

    const notionResponse = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      sorts: [ 
        { property: "Id", direction: "ascending" } 
      ]
    });
    
    response.setHeader(
      'Cache-Control',
      's-maxage=600, stale-while-revalidate=1200'
    );
    
    response.status(200).json(notionResponse);

  } catch (error: any) { 
    console.error("ERRO [getAnimals]:", error);
    
    let errorMessage = 'Falha ao buscar dados do Notion.';
    const notionErrorCode = error.code; 

    if (notionErrorCode === 'object_not_found') {
        errorMessage = 'Erro: O Database ID não foi encontrado. Verifique seu .env.';
    } else if (notionErrorCode === 'unauthorized') {
        errorMessage = 'Erro: Chave da API (Token) não autorizada. Verifique seu .env.';
    } else if (error.message && error.message.includes('permission')) {
        errorMessage = 'Erro: A integração não tem permissão para acessar esse banco de dados. Você a convidou?';
    } else {
        errorMessage = error.message;
    }

    response.status(500).json({ 
      error: 'Falha ao buscar dados do Notion.', 
      details: errorMessage 
    });
  }
}
