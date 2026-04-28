import Link from 'next/link';
import { DOMAINS } from '@/data/domains';
import { formatPrice } from '@/lib/utils';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24 bg-slate-50">
      <div className="max-w-xl w-full text-center space-y-10">
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tighter text-slate-900 italic">
            Endless Domains
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-sm mx-auto">
            The premium marketplace for unique digital property.
          </p>
        </div>

        <div className="grid gap-3 w-full text-left">
          {DOMAINS.map((domain) => (
            <Link 
              key={domain.name}
              href={`/domain/${domain.name}`}
              className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-all hover:shadow-xl hover:-translate-y-1 flex justify-between items-center group"
            >
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {domain.name}
                </h3>
                <p className="text-xs text-slate-400 font-bold">{formatPrice(domain.price)}</p>
              </div>
              <span className={`text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded-full border ${
                domain.available 
                  ? 'bg-green-50 border-green-100 text-green-600' 
                  : 'bg-slate-50 border-slate-100 text-slate-400'
              }`}>
                {domain.available ? 'Available' : 'Taken'}
              </span>
            </Link>
          ))}
        </div>

        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest pt-8">
          Strictly Next.js App Router — 2026
        </p>
      </div>
    </main>
  );
}
