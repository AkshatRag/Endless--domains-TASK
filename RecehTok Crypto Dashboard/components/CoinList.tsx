import { CoinRow } from "./CoinRow";
import { coins } from "@/data/coins";

export const CoinList = () => {
  // Mapping coins to colors
  const colorMap: Record<string, "cyan" | "pink" | "yellow"> = {
    'btc': 'pink',
    'eth': 'cyan',
    'ltc': 'yellow',
    'btc-idr': 'yellow'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {coins.map((coin) => (
        <CoinRow 
          key={coin.id} 
          coin={coin} 
          colorCode={colorMap[coin.id] || "cyan"} 
          currency={coin.id === 'btc-idr' ? 'IDR' : 'USD'}
        />
      ))}
    </div>
  );
};
