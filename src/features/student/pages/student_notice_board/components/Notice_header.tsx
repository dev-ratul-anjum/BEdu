import React from 'react';
import { Card, Select, Input, Button, Typography } from 'antd';
import { Bell, Search } from 'lucide-react';

const { Title } = Typography;

interface Notice_HeaderProps {
  selected_month: string;
  on_month_change: (month: string) => void;
  month_options: { label: string; value: string }[];
  search_query: string;
  on_search_change: (query: string) => void;
}

const Notice_Header: React.FC<Notice_HeaderProps> = ({
  selected_month,
  on_month_change,
  month_options,
  search_query,
  on_search_change,
}) => {
  return (
    <Card className="shadow-sm border-gray-200 mb-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 text-cyan-500" />
          <Title
            level={4}
            className="!mb-0 !text-xl !font-semibold"
          >
            Notice Board
          </Title>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Input
            placeholder="Search notices..."
            prefix={<Search className="h-4 w-4 text-gray-400" />}
            value={search_query}
            onChange={(e) => on_search_change(e.target.value)}
            className="rounded max-w-md"
          />

          <Select
            value={selected_month}
            onChange={on_month_change}
            options={month_options}
            style={{ width: 180 }}
          />
        </div>
      </div>
    </Card>
  );
};

export default Notice_Header;
