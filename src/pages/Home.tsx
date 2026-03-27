import { Sparkles, Download, Wand2, BookOpen, ArrowRight, Twitter, Linkedin, Instagram, Menu, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row min-h-screen w-full p-4 lg:p-6 gap-6"
    >
      {/* Left Panel */}
      <div className="relative w-full lg:w-[52%] flex flex-col liquid-glass-strong rounded-3xl p-6 lg:p-10 min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)]">
        {/* Nav */}
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
            <img src="https://picsum.photos/seed/bloomlogo/32/32" alt="Bloom Logo" className="w-8 h-8 rounded-full" />
            <span className="font-semibold text-2xl tracking-tighter text-white">bloom</span>
          </div>
          <button className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:scale-105 transition-transform">
            <span>Menu</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Menu size={14} />
            </div>
          </button>
        </nav>

        {/* Hero Center */}
        <div className="flex-1 flex flex-col items-center justify-center text-center mt-12 mb-12">
          <img src="https://picsum.photos/seed/bloomlogo/80/80" alt="Bloom Logo Large" className="w-20 h-20 rounded-full mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-white leading-[1.1] mb-8 max-w-2xl">
            Designing the <br />
            <span className="font-serif italic text-white/80">surface of bloom</span> AI
          </h1>
          
          <Link to="/generation" className="liquid-glass-strong rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:scale-105 active:scale-95 transition-transform mb-10">
            <span className="font-medium">Explore Now</span>
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <Download size={16} />
            </div>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/gallery" className="liquid-glass rounded-full px-5 py-2 text-xs text-white/80 hover:scale-105 transition-transform cursor-pointer">Artistic Gallery</Link>
            <Link to="/generation" className="liquid-glass rounded-full px-5 py-2 text-xs text-white/80 hover:scale-105 transition-transform cursor-pointer">AI Generation</Link>
            <Link to="/structures" className="liquid-glass rounded-full px-5 py-2 text-xs text-white/80 hover:scale-105 transition-transform cursor-pointer">3D Structures</Link>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-auto flex flex-col items-center text-center gap-4">
          <span className="text-xs tracking-widest uppercase text-white/50">Front-End Craft</span>
          <p className="text-lg md:text-xl text-white/90 max-w-md">
            "Hierarchy, contrast, and <span className="font-serif italic text-white">pacing</span>—the things that outlast trends."
          </p>
          <div className="flex items-center gap-4 w-full max-w-xs opacity-60">
            <div className="h-[1px] flex-1 bg-white/30"></div>
            <span className="text-[10px] tracking-widest uppercase">Design Philosophy</span>
            <div className="h-[1px] flex-1 bg-white/30"></div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden lg:flex w-[48%] flex-col justify-between py-2">
        {/* Top Bar */}
        <div className="flex items-center justify-end gap-4">
          <div className="liquid-glass rounded-full px-2 py-2 flex items-center gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all">
              <Twitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all">
              <Linkedin size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all">
              <Instagram size={14} />
            </a>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center ml-2 cursor-pointer hover:scale-105 transition-transform">
              <ArrowRight size={14} />
            </div>
          </div>
          <button className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-sm">Account</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Sparkles size={12} />
            </div>
          </button>
        </div>

        {/* Community Card */}
        <div className="self-end mt-12 liquid-glass rounded-3xl p-5 w-64 hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/avatar${i}/24/24`} alt="Avatar" className="w-6 h-6 rounded-full border border-white/20" />
              ))}
            </div>
            <span className="text-xs text-white/60">+2k joined</span>
          </div>
          <h3 className="text-sm font-medium text-white mb-1">Built for portfolios</h3>
          <p className="text-xs text-white/50">A showcase of layout, motion, and visual rhythm.</p>
        </div>

        {/* Bottom Feature Section */}
        <div className="mt-auto liquid-glass rounded-[2.5rem] p-4 flex flex-col gap-4">
          <div className="flex gap-4">
            <Link to="/generation" className="flex-1 liquid-glass rounded-3xl p-5 flex flex-col gap-3 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Wand2 size={14} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Visual System</h4>
                <p className="text-xs text-white/50 mt-1">Glass surfaces & motion design</p>
              </div>
            </Link>
            <Link to="/gallery" className="flex-1 liquid-glass rounded-3xl p-5 flex flex-col gap-3 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <BookOpen size={14} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Image Grid</h4>
                <p className="text-xs text-white/50 mt-1">Responsive card composition</p>
              </div>
            </Link>
          </div>
          
          <Link to="/structures" className="liquid-glass rounded-3xl p-4 flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
            <img src="https://picsum.photos/seed/flower/96/64" alt="Flower thumbnail" className="w-24 h-16 rounded-2xl object-cover" />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-white">Viewer Chrome</h4>
              <p className="text-xs text-white/50 mt-1">Spatial layout, controls bar, and instrumentation styling.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Plus size={16} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
