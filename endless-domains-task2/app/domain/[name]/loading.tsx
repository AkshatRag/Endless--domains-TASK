export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-slate-200">
        <div className="p-8 animate-pulse">
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-4 w-2/3">
              <div className="h-10 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-100 rounded w-3/4" />
            </div>
            <div className="h-7 bg-slate-200 rounded-full w-24" />
          </div>

          <div className="border-t border-slate-100 pt-8 mt-4">
            <div className="mb-10 space-y-3">
              <div className="h-3 bg-slate-100 rounded w-20" />
              <div className="h-12 bg-slate-200 rounded w-48" />
            </div>

            <div className="h-16 bg-slate-100 rounded-2xl w-full" />
            
            <div className="mt-8 flex justify-center">
              <div className="h-3 bg-slate-100 rounded w-40" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
