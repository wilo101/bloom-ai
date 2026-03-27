import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Generation from './pages/Generation';
import Structures from './pages/Structures';

function Background() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={false}
        animate={{ 
          backdropFilter: isHome ? 'blur(0px)' : 'blur(12px)',
          backgroundColor: isHome ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.3)'
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Fragment key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/generation" element={<Generation />} />
          <Route path="/structures" element={<Structures />} />
        </Routes>
      </Fragment>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-hidden">
        <Background />

        {/* Main Content */}
        <div className="relative z-10 w-full h-screen overflow-y-auto">
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}
