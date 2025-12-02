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
    const [selected, setSelected] = useState(
        selectedChildId || children[0]?.id
    );

    const handleChange = (value: string) => {
        setSelected(value);
        onSelect?.(value);
    };

    return (
        <div className="mb-6">
            <Text className="text-sm text-gray-500 block mb-2">
                My Children
            </Text>
            <Select
                value={selected}
                onChange={handleChange}
                style={{ width: '100%', height: '40px' }}
                options={children.map(child => ({
                    label: child.name,
                    value: child.id,
                }))}
                className="!text-base"
            />
        </div>
    );
};

export default ChildSelector;
