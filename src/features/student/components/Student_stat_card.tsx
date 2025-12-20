import { cn } from '@/lib/utils';

export default function Student_card({ stat }: TProps) {
  const isGradient = !!stat.gradient;

  return (
    <div
      className={cn(
        'p-6 rounded-lg shadow-sm flex flex-col justify-between h-28 rounded relative overflow-hidden',
        isGradient ? stat.gradient : 'bg-white border border-gray-200'
      )}
    >
      <div className="flex justify-between items-start z-10 w-full">
        <h3
          className={cn(
            'text-lg font-bold tracking-wide',
            isGradient ? 'text-white' : 'text-gray-800'
          )}
        >
          {stat.title || stat.label}
        </h3>
        <p className={cn('text-2xl font-bold', isGradient ? 'text-white' : 'text-gray-800')}>
          {stat.value}
        </p>
      </div>
      <div className="z-10 mt-auto">
        <p className={cn('text-sm font-medium', isGradient ? 'text-white/90' : 'text-gray-500')}>
          {stat.subtitle}
        </p>
      </div>
    </div>
  );
}

export type TStat = {
  title?: string;
  subtitle?: string;
  value: string | number;
  gradient?: string;
  // Legacy props for compatibility (optional)
  label?: string;
  icon?: any;
  color?: string;
};

type TProps = {
  stat: TStat;
};
