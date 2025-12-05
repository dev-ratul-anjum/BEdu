import React from 'react';
import { Card, Tag, Typography, Divider, Empty, Button, Space } from 'antd';
import { Pin, Eye, EyeOff, Trash2 } from 'lucide-react';

const { Title, Text, Paragraph } = Typography;

interface Notice_Item {
    key: string | number;
    id: string;
    title: string;
    content: string;
    date: string;
    category: 'academic' | 'event' | 'holiday' | 'general';
    is_pinned: boolean;
    is_read: boolean;
}

interface Notice_ListProps {
    notices: Notice_Item[];
    on_pin?: (id: string) => void;
    on_delete?: (id: string) => void;
    on_mark_read?: (id: string) => void;
}

const Notice_List: React.FC<Notice_ListProps> = ({
    notices,
    on_pin,
    on_delete,
    on_mark_read,
}) => {
    const get_category_color = (category: string) => {
        switch (category) {
            case 'academic':
                return 'blue';
            case 'event':
                return 'purple';
            case 'holiday':
                return 'green';
            case 'general':
                return 'default';
            default:
                return 'default';
        }
    };

    if (notices.length === 0) {
        return (
            <Empty
                description="No notices found"
                className="py-12"
            />
        );
    }

    return (
        <div className="space-y-4">
            {notices.map(notice => (
                <Card
                    key={notice.key}
                    className={`shadow-sm border-gray-200 hover:shadow-md transition-shadow ${
                        !notice.is_read ? 'bg-blue-50' : ''
                    }`}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <Title
                                    level={5}
                                    className="!mb-0"
                                >
                                    {notice.title}
                                </Title>
                                {notice.is_pinned && (
                                    <Pin className="h-4 w-4 text-orange-500 fill-orange-500" />
                                )}
                                {!notice.is_read && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                )}
                            </div>

                            <div className="flex items-center gap-2 mb-3">
                                <Tag
                                    color={get_category_color(notice.category)}
                                >
                                    {notice.category}
                                </Tag>
                                <Text className="text-xs text-gray-500">
                                    {notice.date}
                                </Text>
                            </div>

                            <Paragraph className="!mb-0 text-gray-700 line-clamp-2">
                                {notice.content}
                            </Paragraph>
                        </div>

                        <div className="ml-4">
                            <Space
                                direction="vertical"
                                size="small"
                            >
                                {on_mark_read && (
                                    <Button
                                        type="text"
                                        size="small"
                                        icon={
                                            notice.is_read ? (
                                                <EyeOff className="h-4 w-4" />
                                            ) : (
                                                <Eye className="h-4 w-4" />
                                            )
                                        }
                                        onClick={() => on_mark_read(notice.id)}
                                    >
                                        {notice.is_read ? 'Unread' : 'Read'}
                                    </Button>
                                )}

                                {on_pin && (
                                    <Button
                                        type="text"
                                        size="small"
                                        icon={<Pin className="h-4 w-4" />}
                                        onClick={() => on_pin(notice.id)}
                                    >
                                        {notice.is_pinned ? 'Unpin' : 'Pin'}
                                    </Button>
                                )}

                                {on_delete && (
                                    <Button
                                        type="text"
                                        size="small"
                                        danger
                                        icon={<Trash2 className="h-4 w-4" />}
                                        onClick={() => on_delete(notice.id)}
                                    >
                                        Delete
                                    </Button>
                                )}
                            </Space>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Notice_List;
