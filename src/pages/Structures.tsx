import { Link } from 'react-router-dom';
import { ArrowLeft, Box, Rotate3D } from 'lucide-react';
import { motion } from 'motion/react';

export default function Structures() {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5 }}
      className="p-4 lg:p-6 min-h-screen flex flex-col"
    >
      <div className="liquid-glass-strong rounded-3xl p-6 lg:p-10 flex-1 w-full max-w-7xl mx-auto flex flex-col">
        <nav className="flex items-center justify-between w-full mb-8">
          <Link to="/" className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:scale-105 transition-transform">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowLeft size={14} />
            </div>
            <span>Back</span>
          </Link>
          <h2 className="text-2xl font-medium tracking-tight">3D <span className="font-serif italic text-white/80">Structures</span></h2>
          <div className="w-24"></div>
        </nav>

        <div className="flex-1 liquid-glass rounded-3xl overflow-hidden relative flex flex-col items-center justify-center group">
          {/* Placeholder for 3D Canvas */}
          <img src="https://picsum.photos/seed/bloom3d/1200/800" alt="3D Structure" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 transition-opacity duration-1000" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full liquid-glass-strong flex items-center justify-center animate-bounce">
              <Rotate3D size={32} className="text-white" />
            </div>
            <div className="text-center liquid-glass p-6 rounded-3xl max-w-md">
              <h3 className="text-xl font-medium mb-2">Interactive Viewer</h3>
              <p className="text-sm text-white/60">Drag to rotate the neural-generated floral structure. Pinch to zoom.</p>
            </div>
          </div>

          {/* Controls overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-6">
            <button className="text-white/60 hover:text-white transition-colors"><Box size={20} /></button>
            <div className="w-px h-6 bg-white/20"></div>
            <span className="text-sm font-medium">Orchid_Variant_04.obj</span>
            <div className="w-px h-6 bg-white/20"></div>
            <button className="text-sm text-white/80 hover:text-white transition-colors">Download</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
