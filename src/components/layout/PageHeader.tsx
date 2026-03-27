import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import IconCircle from '../ui/IconCircle';

interface PageHeaderProps {
  title: string;
  titleAccent: string;
  backTo?: string;
}

export default function PageHeader({ title, titleAccent, backTo = '/' }: PageHeaderProps) {
  return (
    <nav className="flex items-center justify-between w-full mb-10">
      <Link
        to={backTo}
        className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:scale-105 transition-transform"
      >
        <IconCircle size="sm"><ArrowLeft size={14} /></IconCircle>
        <span>Back</span>
      </Link>

      <h2 className="text-2xl font-medium tracking-tight">
        {title} <span className="font-serif italic text-white/80">{titleAccent}</span>
      </h2>

      <div className="w-24" />
    </nav>
  );
}
