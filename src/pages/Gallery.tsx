import { Image as ImageIcon } from 'lucide-react';
import { PageShell, PageHeader, GlassPanel, IconCircle } from '../components';

const ITEMS = Array.from({ length: 6 }, (_, i) => i + 1);

export default function Gallery() {
  return (
    <PageShell className="flex flex-col">
      <GlassPanel variant="strong" className="flex-1 w-full max-w-7xl mx-auto flex flex-col p-6 lg:p-10">
        <PageHeader title="Visual" titleAccent="Gallery" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2 pb-4">
          {ITEMS.map((i) => (
            <GlassPanel key={i} className="p-4 flex flex-col gap-4 hover:scale-[1.02] transition-transform cursor-pointer group">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img
                  src={`https://picsum.photos/seed/bloomgal${i}/600/600`}
                  alt={`Study ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium">Study {i}</span>
                <IconCircle size="md"><ImageIcon size={14} /></IconCircle>
              </div>
            </GlassPanel>
          ))}
        </div>
      </GlassPanel>
    </PageShell>
  );
}
