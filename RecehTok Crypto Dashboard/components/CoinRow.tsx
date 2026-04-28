import { Coin } from "@/types/coin";
import { cn } from "@/lib/utils";

interface CoinRowProps {
  coin: Coin;
  colorCode: "cyan" | "pink" | "yellow";
  currency?: string;
}

export const CoinRow = ({ coin, colorCode, currency = "USD" }: CoinRowProps) => {
  const isPositive = coin.change24h >= 0;

  const strokeColor = {
    cyan: "#00f0ff",
    pink: "#ff0055",
    yellow: "#ffb800"
  }[colorCode];

  const glowShadow = {
    cyan: "group-hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]",
    pink: "group-hover:shadow-[0_0_25px_rgba(255,0,85,0.2)]",
    yellow: "group-hover:shadow-[0_0_25px_rgba(255,184,0,0.2)]"
  }[colorCode];

  const formatPrice = (val: number, cur: string) => {
    if (cur === 'IDR') {
      return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(val);
    }
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);
  };

  const drawSparkline = () => {
    if (!coin.sparkline || coin.sparkline.length === 0) return "";
    const max = Math.max(...coin.sparkline);
    const min = Math.min(...coin.sparkline);
    const range = max - min || 1;
    const height = 30;
    const width = 100;
    
    return coin.sparkline.map((val, i) => {
      const x = (i / (coin.sparkline.length - 1)) * width;
      const y = height - ((val - min) / range) * height;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(" ");
  };

  return (
    <div className={cn(
      "group p-5 rounded-2xl border border-transparent transition-all duration-300 ease-out cursor-pointer flex flex-col gap-3",
      "hover:bg-white/5 hover:scale-[1.02] hover:brightness-110 hover:border-white/5 hover:translate-x-1",
      glowShadow
    )}>
      <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-white group-hover:text-cyan-400 transition-colors">{coin.symbol}</span>
          <span className="opacity-50">/</span>
          <span>{currency}</span>
        </div>
        <span className={cn(
          isPositive ? "text-green-400" : "text-red-400",
          "drop-shadow-[0_0_8px_currentColor] transition-all duration-300"
        )}>
          {isPositive ? '↗' : '↘'} {Math.abs(coin.change24h)}%
        </span>
      </div>
      
      <div className="text-2xl font-bold text-white tracking-tight group-hover:tracking-normal transition-all duration-300">
        {formatPrice(coin.price, currency)}
      </div>

      <div className="mt-2 h-[35px] relative w-full overflow-hidden rounded-lg">
        <svg viewBox="0 -5 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
          <path
            d={drawSparkline()}
            fill="none"
            stroke={strokeColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_10px_currentColor] transition-all duration-500"
            style={{ color: strokeColor }}
          />
        </svg>
      </div>
    </div>
  );
};
