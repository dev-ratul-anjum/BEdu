import React, { useState } from 'react';
import { Select, Typography } from 'antd';

const { Text } = Typography;

interface Child {
  id: string;
  name: string;
}

interface ChildSelectorProps {
  children?: Child[];
  onSelect?: (childId: string) => void;
  selectedChildId?: string;
}

const ChildSelector: React.FC<ChildSelectorProps> = ({
  children = [{ id: '1', name: 'Johnnie Rau' }],
  onSelect,
  selectedChildId,
}) => {
  const [selected, setSelected] = useState(selectedChildId || children[0]?.id);

  const handleChange = (value: string) => {
    setSelected(value);
    onSelect?.(value);
  };

  return (
    <div className="mb-6">
      <Text className="text-sm font-medium text-gray-500 block mb-2">My Children</Text>
      <Select
        value={selected}
        onChange={handleChange}
        className="w-full md:w-[300px] !h-10 !text-base"
        options={children.map((child) => ({
          label: child.name,
          value: child.id,
        }))}
      />
    </div>
  );
};

export default ChildSelector;
