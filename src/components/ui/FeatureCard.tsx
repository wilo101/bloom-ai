import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import IconCircle from './IconCircle';

interface FeatureCardProps {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ to, icon, title, description }: FeatureCardProps) {
  return (
    <Link
      to={to}
      className="flex-1 liquid-glass rounded-3xl p-5 flex flex-col gap-3 hover:scale-105 transition-transform"
    >
      <IconCircle>{icon}</IconCircle>
      <div>
        <h4 className="text-sm font-medium text-white">{title}</h4>
        <p className="text-xs text-white/50 mt-1">{description}</p>
      </div>
    </Link>
  );
}
