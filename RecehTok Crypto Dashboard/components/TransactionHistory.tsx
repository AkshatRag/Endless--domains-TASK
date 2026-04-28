import { transactions } from "@/data/transactions";
import { cn } from "@/lib/utils";

export const TransactionHistory = () => {
  return (
    <div className="flex flex-col gap-2">
      {transactions.map((tx) => {
        const isPositive = tx.amount > 0;
        return (
          <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:border-white/20 transition-colors">
                {tx.coin.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">{tx.description}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className={cn(
                isPositive ? "text-green-400" : "text-red-400"
              )}>
                {isPositive ? '+' : ''}{tx.amount}
              </span>
              <span className="text-gray-500 text-xs w-20 text-right">{tx.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
