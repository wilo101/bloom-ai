import { Link } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Gallery() {
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
          <h2 className="text-2xl font-medium tracking-tight">Artistic <span className="font-serif italic text-white/80">Gallery</span></h2>
          <div className="w-24"></div> {/* Spacer for centering */}
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2 pb-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="liquid-glass rounded-3xl p-4 flex flex-col gap-4 hover:scale-[1.02] transition-transform cursor-pointer group">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img src={`https://picsum.photos/seed/bloomgal${i}/600/600`} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium">Floral Study {i}</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <ImageIcon size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
