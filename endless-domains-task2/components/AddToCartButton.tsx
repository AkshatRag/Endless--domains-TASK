'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Check } from 'lucide-react';
import { Domain } from '@/types/domain';
import { formatPrice } from '@/lib/utils';

interface AddToCartButtonProps {
  domain: Domain;
}

export function AddToCartButton({ domain }: AddToCartButtonProps) {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(prev => !prev);
    console.log(`Cart updated for ${domain.name}: ${!inCart ? 'Added' : 'Removed'}`);
  };

  if (!domain.available) {
    return (
      <button
        disabled
        className="w-full py-4 px-6 bg-slate-100 text-slate-400 font-bold rounded-xl cursor-not-allowed uppercase tracking-widest text-xs"
      >
        Taken
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={toggleCart}
      className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${inCart
        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-200'
        }`}
    >
      {inCart ? (
        <>
          <Check className="w-5 h-5 stroke-[3]" />
          <span className="tracking-tight">In Your Cart</span>
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5" />
          <span>Claim for {formatPrice(domain.price)}</span>
        </>
      )}
    </motion.button>
  );
}
