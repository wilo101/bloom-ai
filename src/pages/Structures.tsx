import { Box, Rotate3D } from 'lucide-react';
import { PageShell, PageHeader, GlassPanel, IconCircle } from '../components';

export default function Structures() {
  return (
    <PageShell className="flex flex-col">
      <GlassPanel variant="strong" className="flex-1 w-full max-w-7xl mx-auto flex flex-col p-6 lg:p-10">
        <PageHeader title="3D" titleAccent="Structures" />

        <GlassPanel className="flex-1 overflow-hidden relative flex flex-col items-center justify-center group">
          <img
            src="https://picsum.photos/seed/bloom3d/1200/800"
            alt="3D Structure"
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 transition-opacity duration-1000"
          />

          {/* Stage label */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <IconCircle size="lg" className="liquid-glass-strong w-20 h-20 animate-bounce">
              <Rotate3D size={32} className="text-white" />
            </IconCircle>

            <GlassPanel className="p-6 max-w-md text-center">
              <h3 className="text-xl font-medium mb-2">Viewer Stage</h3>
              <p className="text-sm text-white/60">Spatial chrome and controls — layout concept for a 3D asset browser.</p>
            </GlassPanel>
          </div>

          {/* Controls bar */}
          <GlassPanel variant="strong" radius="full" className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 flex items-center gap-6">
            <button className="text-white/60 hover:text-white transition-colors"><Box size={20} /></button>
            <div className="w-px h-6 bg-white/20" />
            <span className="text-sm font-medium">Orchid_Variant_04.obj</span>
            <div className="w-px h-6 bg-white/20" />
            <button className="text-sm text-white/80 hover:text-white transition-colors">Download</button>
          </GlassPanel>
        </GlassPanel>
      </GlassPanel>
    </PageShell>
  );
}
