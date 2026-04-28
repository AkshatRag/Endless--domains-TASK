import { notFound } from 'next/navigation';
import { DOMAINS } from '@/data/domains';
import { Metadata } from 'next';
import { AddToCartButton } from '@/components/AddToCartButton';
import { formatPrice } from '@/lib/utils';
import { Domain } from '@/types/domain';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params;
  return { title: `${name} | Endless Domains` };
}

export default async function DomainPage({ params }: PageProps) {
  const { name } = await params;
  
  // Simulate network delay for loading state visibility
  await new Promise((r) => setTimeout(r, 800));

  const domainData: Domain | undefined = DOMAINS.find(
    (d) => d.name.toLowerCase() === name.toLowerCase()
  );

  if (!domainData) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Domain not found</h1>
          <p className="text-slate-500">We couldn't find any details for "{name}".</p>
        </div>
      </main>
    );
  }

  const { available } = domainData;

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2 underline decoration-indigo-500/30 underline-offset-4">
                {domainData.name}
              </h1>
              <p className="text-slate-500 leading-relaxed">
                {domainData.description || 'Premium domain name for your next venture.'}
              </p>
            </div>
            <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${
              available 
                ? 'bg-green-50 border-green-200 text-green-700' 
                : 'bg-red-50 border-red-200 text-red-700'
            }`}>
              {available ? 'Available' : 'Taken'}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 mt-4">
            <div className="mb-8">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Market Value</span>
              <p className="text-5xl font-black text-slate-900 tracking-tight">
                {formatPrice(domainData.price)}
              </p>
            </div>

            <AddToCartButton domain={domainData} />
            
            <p className="mt-8 text-center text-xs text-slate-400 font-medium italic">
              Verified by App Router Technology — {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
