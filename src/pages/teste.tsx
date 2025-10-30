import { useEffect, useState } from "react";
import { getAnimais, type Animal } from "../utils/notion";

export default function Adocao() {
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnimais() {
      try {
        const data = await getAnimais();
        setAnimais(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAnimais();
  }, []);

  if (loading) return <p>⏳ Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {animais.map((a) => (
        <div key={a.id} className="rounded-xl shadow p-4 border">
          {a.foto && (
            <img
              src={a.foto}
              alt={a.nome}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
          )}
          <h2 className="text-xl font-semibold">{a.nome}</h2>
          <p>Raça: {a.raca}</p>
          <p>Cor/Pelugem/Espécie: {a.cor}</p>
        </div>
      ))}
    </section>
  );
}
