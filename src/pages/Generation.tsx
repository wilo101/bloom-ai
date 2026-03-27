import { Sparkles, Wand2 } from 'lucide-react';
import { PageShell, PageHeader, GlassPanel, IconCircle } from '../components';

const STYLES = ['Hyper-realistic', 'Ethereal', 'Abstract 3D'] as const;
const RATIOS = ['1:1 Square', '16:9 Landscape', '9:16 Portrait'] as const;

export default function Generation() {
  return (
    <PageShell className="flex flex-col">
      <GlassPanel variant="strong" className="flex-1 w-full max-w-6xl mx-auto flex flex-col p-6 lg:p-10">
        <PageHeader title="Studio" titleAccent="Generation" />

        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          {/* Controls */}
          <div className="flex-1 flex flex-col gap-6">
            <GlassPanel className="p-6 flex flex-col gap-4">
              <label className="text-sm font-medium text-white/80">Prompt</label>
              <textarea
                className="w-full bg-transparent border-none outline-none resize-none text-lg placeholder:text-white/30 min-h-[150px]"
                placeholder="Type anything—this is a layout demo, not a live model."
              />
            </GlassPanel>

            <div className="grid grid-cols-2 gap-4">
              <GlassPanel radius="2xl" className="p-4 flex flex-col gap-2">
                <span className="text-xs text-white/50 uppercase tracking-wider">Style</span>
                <select className="bg-transparent text-sm outline-none appearance-none cursor-pointer">
                  {STYLES.map((s) => <option key={s} className="bg-black">{s}</option>)}
                </select>
              </GlassPanel>

              <GlassPanel radius="2xl" className="p-4 flex flex-col gap-2">
                <span className="text-xs text-white/50 uppercase tracking-wider">Aspect Ratio</span>
                <select className="bg-transparent text-sm outline-none appearance-none cursor-pointer">
                  {RATIOS.map((r) => <option key={r} className="bg-black">{r}</option>)}
                </select>
              </GlassPanel>
            </div>

            <button className="mt-auto liquid-glass-strong rounded-full py-4 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <Sparkles size={18} />
              <span className="font-medium text-lg">Generate</span>
            </button>
          </div>

          {/* Canvas */}
          <GlassPanel className="flex-1 p-4 flex flex-col items-center justify-center min-h-[400px] text-center border border-white/5 border-dashed">
            <IconCircle size="lg" className="bg-white/5 mb-4">
              <Wand2 size={24} className="text-white/30" />
            </IconCircle>
            <p className="text-white/50 max-w-xs">Output canvas — reserved for the result preview area.</p>
          </GlassPanel>
        </div>
      </GlassPanel>
    </PageShell>
  );
}
