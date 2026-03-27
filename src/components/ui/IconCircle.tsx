import type { ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';

interface IconCircleProps {
  size?: Size;
  className?: string;
  children: ReactNode;
}

const sizeMap: Record<Size, string> = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

export default function IconCircle({ size = 'md', className = '', children }: IconCircleProps) {
  return (
    <div className={`${sizeMap[size]} rounded-full bg-white/10 flex items-center justify-center shrink-0 ${className}`}>
      {children}
    </div>
  );
}
