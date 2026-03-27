import { Link } from 'react-router-dom';

interface NavPillProps {
  to: string;
  label: string;
}

export default function NavPill({ to, label }: NavPillProps) {
  return (
    <Link
      to={to}
      className="liquid-glass rounded-full px-5 py-2 text-xs text-white/80 hover:scale-105 transition-transform"
    >
      {label}
    </Link>
  );
}
