import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

export default function StatCard({ stat }: TProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center justify-between">
      <div className={cn('p-6 rounded-full', stat.color)}>
        <stat.icon className="h-10 w-10" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{stat.label}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
      </div>
    </div>
  );
}

export type TStat = {
  label: string;
  value: string | number;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
};

type TProps = {
  stat: TStat;
};
