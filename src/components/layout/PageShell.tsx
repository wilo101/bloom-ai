import type { ReactNode } from 'react';
import { motion } from 'motion/react';

const transition = { duration: 0.5 } as const;
const blurIn = { opacity: 0, filter: 'blur(10px)' } as const;
const blurOut = { opacity: 1, filter: 'blur(0px)' } as const;

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export default function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <motion.div
      initial={blurIn}
      animate={blurOut}
      exit={blurIn}
      transition={transition}
      className={`min-h-screen w-full p-4 lg:p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
