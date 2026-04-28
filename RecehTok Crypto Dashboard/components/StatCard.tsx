import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  change: number;
  icon: ReactNode;
  active?: boolean;
  color: "cyan" | "pink" | "yellow";
  onClick?: () => void;
}

export const StatCard = ({ label, value, change, icon, active, color, onClick }: StatCardProps) => {
  const isPositive = change >= 0;
  
  const bgActiveMap = {
    cyan: "bg-gradient-to-br from-[#00D2FF] to-[#0096FF] shadow-[0_15px_35px_rgba(0,210,255,0.4)]",
    pink: "bg-gradient-to-br from-[#E100FF] to-[#7E00FF] shadow-[0_15px_35px_rgba(225,0,255,0.4)]",
    yellow: "bg-gradient-to-br from-[#FFD700] to-[#FF8C00] shadow-[0_15px_35px_rgba(255,215,0,0.4)]"
  };

  const sparklineColor = {
    cyan: "#00f0ff",
    pink: "#ff0055",
    yellow: "#ffb800"
  }[color];

  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-6 rounded-3xl border transition-all duration-500 ease-out relative overflow-hidden group cursor-pointer flex flex-col gap-4 min-h-[140px] justify-center",
        active 
          ? cn(bgActiveMap[color], "border-transparent scale-105 z-10") 
          : "bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20"
      )}
    >
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110",
          active ? "bg-white/20 text-white" : "bg-white/10 text-gray-400"
        )}>
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1">
            <h3 className={cn("text-2xl font-bold truncate tracking-tight", active ? "text-white" : "text-white")}>{value}</h3>
            <span className={cn("text-xs font-bold uppercase tracking-widest", active ? "text-white/70" : "text-gray-500")}>{label}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex-1 h-8">
          <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path 
              d="M0 15 Q 15 5, 30 15 T 60 10 T 100 12" 
              fill="none" 
              stroke={active ? "#fff" : sparklineColor} 
              strokeWidth="2.5"
              strokeLinecap="round"
              className={cn("drop-shadow-[0_0_8px_currentColor]", !active && "opacity-80")}
              style={{ color: active ? "#fff" : sparklineColor }}
            />
          </svg>
        </div>
        <div className={cn(
          "flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg ml-4 transition-colors",
          active 
            ? "text-white bg-white/20" 
            : isPositive ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"
        )}>
          {isPositive ? '↗' : '↘'} {Math.abs(change)}%
        </div>
      </div>
    </div>
  );
};
