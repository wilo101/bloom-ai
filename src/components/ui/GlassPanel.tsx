import type { ReactNode } from 'react';

type Variant = 'default' | 'strong';
type Radius = 'xl' | '2xl' | '3xl' | 'full';

interface GlassPanelProps {
  variant?: Variant;
  radius?: Radius;
  as?: 'div' | 'section';
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

const radiusMap: Record<Radius, string> = {
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

export default function GlassPanel({
  variant = 'default',
  radius = '3xl',
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}: GlassPanelProps) {
  const base = variant === 'strong' ? 'liquid-glass-strong' : 'liquid-glass';
  return (
    <Tag className={`${base} ${radiusMap[radius]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
