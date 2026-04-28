"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { time: '10:59PM', btc: 3000, eth: 2800, ltc: 2500 },
  { time: '11:59PM', btc: 3500, eth: 3100, ltc: 2700 },
  { time: '12:59AM', btc: 3200, eth: 3700, ltc: 3000 },
  { time: '1:59AM', btc: 4000, eth: 3400, ltc: 3800 },
  { time: '2:59AM', btc: 3800, eth: 4200, ltc: 3500 },
  { time: '3:59AM', btc: 4500, eth: 4800, ltc: 4600 },
  { time: '4:59AM', btc: 4200, eth: 4600, ltc: 4000 },
  { time: '5:59AM', btc: 5000, eth: 4200, ltc: 4800 },
  { time: '6:59AM', btc: 4800, eth: 5000, ltc: 4400 },
  { time: '7:59AM', btc: 5500, eth: 4800, ltc: 5200 },
];

export const PortfolioChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px] mt-8 flex flex-col"
    >
      <div className="flex items-center gap-6 mb-6 px-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ff0055]" />
          <span className="text-xs text-gray-400 font-medium">BTC</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          <span className="text-xs text-gray-400 font-medium">ETH</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#ffb800]" />
          <span className="text-xs text-gray-400 font-medium">LTC</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-0 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff0055" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ff0055" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorEth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorLtc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffb800" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ffb800" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="time"
            stroke="rgba(255,255,255,0.2)"
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            stroke="rgba(255,255,255,0.2)"
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}`}
            tickMargin={10}
          />
          <Tooltip
            contentStyle={{}}
            itemStyle={{}}
            wrapperClassName="chart-tooltip"
            labelClassName="chart-tooltip-item"
          />

          <Area
            type="monotone"
            dataKey="btc"
            stroke="#ff0055"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorBtc)"
            animationDuration={2000}
            className="neon-glow-pink"

          />
          <Area
            type="monotone"
            dataKey="eth"
            stroke="#00f0ff"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorEth)"
            animationDuration={2000}
            className="neon-glow-blue"

          />
          <Area
            type="monotone"
            dataKey="ltc"
            stroke="#ffb800"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorLtc)"
            animationDuration={2000}
            className="neon-glow-yellow"

          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
