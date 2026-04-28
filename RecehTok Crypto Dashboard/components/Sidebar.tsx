"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Wallet, MessageSquare, ArrowLeftRight, Settings, AlignLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Wallet", icon: Wallet },
    { label: "Messages", icon: MessageSquare, badge: true },
    { label: "Trade", icon: ArrowLeftRight },
    { label: "Account Setting", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass-panel rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AlignLeft className="w-6 h-6 text-white" />
      </button>

      <motion.aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-[#111024] border-r border-[rgba(255,255,255,0.02)] transition-transform duration-300 lg:translate-x-0 lg:static lg:flex flex-col h-full",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center -ml-1">
            <Image src="/logo.svg" alt="RecehTok Logo" width={40} height={40} className="object-contain" />
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">Receh<span className="text-gray-400">tok</span></h1>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group",
                item.active
                  ? "text-cyan-400 relative"
                  : "text-gray-500 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", item.active ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" : "")} />
              <span className="font-medium text-sm">{item.label}</span>
              {item.active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 w-1 h-8 bg-cyan-400 rounded-r-full shadow-[0_0_10px_#00f0ff]"
                />
              )}
              {item.badge && (
                <div className="ml-auto w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ff0055]" />
              )}
            </a>
          ))}
        </nav>
      </motion.aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
