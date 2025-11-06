// src/utils/colorUtils.ts

const colorClassMap: { [key: string]: string } = {
  'preto': 'bg-black',
  'branco': 'bg-white border border-zinc-300', 
  'caramelo': 'bg-[#C68642]', 
  'marrom': 'bg-amber-900',
  'cinza': 'bg-zinc-500',
  'dourado': 'bg-yellow-400',
  'creme': 'bg-yellow-50 border border-zinc-300', 
};

const defaultClass = 'bg-zinc-400';

export function getBgColorClass(colorName: string | null): string {
  if (!colorName) {
    return defaultClass;
  }
  const normalizedName = colorName.toLowerCase().trim();
  return colorClassMap[normalizedName] || defaultClass;
}