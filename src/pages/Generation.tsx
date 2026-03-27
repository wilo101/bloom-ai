import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Wand2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Generation() {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5 }}
      className="p-4 lg:p-6 min-h-screen flex flex-col"
    >
      <div className="liquid-glass-strong rounded-3xl p-6 lg:p-10 flex-1 w-full max-w-6xl mx-auto flex flex-col">
        <nav className="flex items-center justify-between w-full mb-12">
          <Link to="/" className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:scale-105 transition-transform">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowLeft size={14} />
            </div>
            <span>Back</span>
          </Link>
          <h2 className="text-2xl font-medium tracking-tight">AI <span className="font-serif italic text-white/80">Generation</span></h2>
          <div className="w-24"></div>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          <div className="flex-1 flex flex-col gap-6">
            <div className="liquid-glass rounded-3xl p-6 flex flex-col gap-4">
              <label className="text-sm font-medium text-white/80">Prompt</label>
              <textarea 
                className="w-full bg-transparent border-none outline-none resize-none text-lg placeholder:text-white/30 min-h-[150px]"
                placeholder="Type anything—this is a layout demo, not a live model."
              ></textarea>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="liquid-glass rounded-2xl p-4 flex flex-col gap-2">
                <span className="text-xs text-white/50 uppercase tracking-wider">Style</span>
                <select className="bg-transparent text-sm outline-none appearance-none cursor-pointer">
                  <option className="bg-black">Hyper-realistic</option>
                  <option className="bg-black">Ethereal</option>
                  <option className="bg-black">Abstract 3D</option>
                </select>
              </div>
              <div className="liquid-glass rounded-2xl p-4 flex flex-col gap-2">
                <span className="text-xs text-white/50 uppercase tracking-wider">Aspect Ratio</span>
                <select className="bg-transparent text-sm outline-none appearance-none cursor-pointer">
                  <option className="bg-black">1:1 Square</option>
                  <option className="bg-black">16:9 Landscape</option>
                  <option className="bg-black">9:16 Portrait</option>
                </select>
              </div>
            </div>

            <button className="mt-auto liquid-glass-strong rounded-full py-4 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <Sparkles size={18} />
              <span className="font-medium text-lg">Generate</span>
            </button>
          </div>

          <div className="flex-1 liquid-glass rounded-3xl p-4 flex flex-col items-center justify-center min-h-[400px] text-center border border-white/5 border-dashed">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Wand2 size={24} className="text-white/30" />
            </div>
            <p className="text-white/50 max-w-xs">Output canvas — reserved for the result preview area.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
