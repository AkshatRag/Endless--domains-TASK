"use client";

import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { PortfolioChart } from "@/components/PortfolioChart";
import { CoinList } from "@/components/CoinList";
import { TransactionHistory } from "@/components/TransactionHistory";
import { Search, Grid, Bell, Plus, User } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [activeWallet, setActiveWallet] = useState<string>("btc");

  return (
    <div className="flex h-screen overflow-hidden bg-[#141326] text-white">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
        {/* Top Navigation / Header */}
        <header className="flex flex-wrap md:flex-nowrap items-center justify-between p-6 lg:px-10 mt-12 lg:mt-0">
          <div>
            <h2 className="text-3xl font-bold tracking-wide">Dashboard</h2>
            <p className="text-gray-400 text-sm mt-1">With all of the styling tool options available in today's market</p>
          </div>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Grid className="w-5 h-5" />
            </button>
            <div className="relative">
              <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center relative shadow-[0_0_15px_rgba(255,0,85,0.2)]">
                <Bell className="w-5 h-5 text-pink-500 drop-shadow-[0_0_8px_#ff0055]" />
              </button>
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-[0_0_8px_#ff0055]">15</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 pr-4 pl-1 py-1 rounded-full cursor-pointer hover:bg-white/10 transition-colors border border-white/5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium">Pixelz Warrior</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </header>

        <div className="px-6 lg:px-10 pb-10 max-w-7xl mx-auto space-y-8">
          {/* Wallets Section */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-4 uppercase">Wallets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 py-4">
              <StatCard 
                label="BTC" 
                value="1.9678" 
                change={12.5} 
                icon={<span className="font-bold text-xl">₿</span>} 
                color="cyan" 
                active={activeWallet === "btc"}
                onClick={() => setActiveWallet("btc")}
              />
              <StatCard 
                label="ETH" 
                value="23.234" 
                change={-5.23} 
                icon={<span className="font-bold text-xl">♦</span>} 
                color="pink" 
                active={activeWallet === "eth"}
                onClick={() => setActiveWallet("eth")}
              />
              <StatCard 
                label="LTC" 
                value="380.234" 
                change={39.69} 
                icon={<span className="font-bold text-xl">Ł</span>} 
                color="yellow" 
                active={activeWallet === "ltc"}
                onClick={() => setActiveWallet("ltc")}
              />
              <button className="flex flex-col items-center justify-center gap-2 p-5 rounded-3xl border border-dashed border-gray-700 text-gray-600 hover:text-white hover:border-gray-500 transition-all hover:bg-white/5 min-h-[140px] group">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">+ Add Currency</span>
              </button>
            </div>
          </section>

          {/* Chart Section */}
          <section className="relative w-full overflow-hidden">
            <PortfolioChart />
          </section>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-4 uppercase">Trend</h3>
              <CoinList />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-gray-500 tracking-wider uppercase">History</h3>
                <button className="text-cyan-400 text-xs font-medium hover:underline">See All</button>
              </div>
              <TransactionHistory />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
