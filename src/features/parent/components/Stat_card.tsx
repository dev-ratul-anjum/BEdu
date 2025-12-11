import React from 'react';
import { Card } from 'antd';

interface StatCardProps {
  title: string;
  subtitle: string;
  count: number;
  backgroundColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  subtitle,
  count,
  backgroundColor = 'bg-gradient-to-r from-cyan-500 to-cyan-600',
}) => {
  return (
    <Card
      className={`${backgroundColor} text-white border-0 shadow-lg h-full`}
      bodyStyle={{ padding: '20px' }}
      hoverable
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-white/80">{subtitle}</p>
        </div>
        <div className="text-4xl font-bold mt-4">{count}</div>
      </div>
    </Card>
  );
};

export default StatCard;
