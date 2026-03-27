import { Sparkles, Download, Wand2, BookOpen, ArrowRight, Twitter, Linkedin, Instagram, Menu, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageShell, GlassPanel, IconCircle, NavPill, FeatureCard } from '../components';

export default function Home() {
  return (
    <PageShell className="flex flex-col lg:flex-row gap-6">
      {/* ── Left Panel ── */}
      <GlassPanel
        variant="strong"
        className="relative w-full lg:w-[52%] flex flex-col p-6 lg:p-10 min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)]"
      >
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
            <img src="https://picsum.photos/seed/bloomlogo/32/32" alt="Bloom Logo" className="w-8 h-8 rounded-full" />
            <span className="font-semibold text-2xl tracking-tighter text-white">bloom</span>
          </div>
          <GlassPanel radius="full" className="px-4 py-2 flex items-center gap-2 text-sm hover:scale-105 transition-transform cursor-pointer">
            <span>Menu</span>
            <IconCircle size="sm"><Menu size={14} /></IconCircle>
          </GlassPanel>
        </nav>

        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center text-center mt-12 mb-12">
          <img
            src="https://picsum.photos/seed/bloomlogo/80/80"
            alt="Bloom Logo Large"
            className="w-20 h-20 rounded-full mb-8 animate-pulse"
          />

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-white leading-[1.1] mb-8 max-w-2xl">
            Designing the <br />
            <span className="font-serif italic text-white/80">surface of bloom</span> AI
          </h1>

          <Link
            to="/generation"
            className="liquid-glass-strong rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:scale-105 active:scale-95 transition-transform mb-10"
          >
            <span className="font-medium">Explore Now</span>
            <IconCircle className="bg-white/15"><Download size={16} /></IconCircle>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <NavPill to="/gallery" label="Visual Gallery" />
            <NavPill to="/generation" label="AI Generation" />
            <NavPill to="/structures" label="3D Structures" />
          </div>
        </div>

        {/* Quote */}
        <footer className="mt-auto flex flex-col items-center text-center gap-4">
          <span className="text-xs tracking-widest uppercase text-white/50">Front-End Craft</span>
          <p className="text-lg md:text-xl text-white/90 max-w-md">
            "Hierarchy, contrast, and <span className="font-serif italic text-white">pacing</span>—the things that outlast trends."
          </p>
          <div className="flex items-center gap-4 w-full max-w-xs opacity-60">
            <div className="h-px flex-1 bg-white/30" />
            <span className="text-[10px] tracking-widest uppercase">Design Philosophy</span>
            <div className="h-px flex-1 bg-white/30" />
          </div>
        </footer>
      </GlassPanel>

      {/* ── Right Panel ── */}
      <div className="hidden lg:flex w-[48%] flex-col justify-between py-2">
        {/* Social bar */}
        <div className="flex items-center justify-end gap-4">
          <GlassPanel radius="full" className="px-2 py-2 flex items-center gap-2">
            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all">
                <Icon size={14} />
              </a>
            ))}
            <IconCircle className="ml-2 bg-white/20 cursor-pointer hover:scale-105 transition-transform">
              <ArrowRight size={14} />
            </IconCircle>
          </GlassPanel>

          <GlassPanel radius="full" className="px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
            <span className="text-sm">Account</span>
            <IconCircle size="sm"><Sparkles size={12} /></IconCircle>
          </GlassPanel>
        </div>

        {/* Community card */}
        <GlassPanel className="self-end mt-12 p-5 w-64 hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/avatar${i}/24/24`} alt="" className="w-6 h-6 rounded-full border border-white/20" />
              ))}
            </div>
            <span className="text-xs text-white/60">+2k joined</span>
          </div>
          <h3 className="text-sm font-medium text-white mb-1">Built for portfolios</h3>
          <p className="text-xs text-white/50">A showcase of layout, motion, and visual rhythm.</p>
        </GlassPanel>

        {/* Feature cards */}
        <GlassPanel variant="default" radius="3xl" className="mt-auto p-4 flex flex-col gap-4">
          <div className="flex gap-4">
            <FeatureCard to="/generation" icon={<Wand2 size={14} />} title="Visual System" description="Glass surfaces & motion design" />
            <FeatureCard to="/gallery" icon={<BookOpen size={14} />} title="Image Grid" description="Responsive card composition" />
          </div>

          <Link to="/structures" className="liquid-glass rounded-3xl p-4 flex items-center gap-4 hover:scale-105 transition-transform">
            <img src="https://picsum.photos/seed/flower/96/64" alt="" className="w-24 h-16 rounded-2xl object-cover" />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-white">Viewer Chrome</h4>
              <p className="text-xs text-white/50 mt-1">Spatial layout, controls bar, and instrumentation styling.</p>
            </div>
            <IconCircle><Plus size={16} /></IconCircle>
          </Link>
        </GlassPanel>
      </div>
    </PageShell>
  );
}
