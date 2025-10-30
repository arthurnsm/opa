import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  const response = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID });
  res.json(response);
}