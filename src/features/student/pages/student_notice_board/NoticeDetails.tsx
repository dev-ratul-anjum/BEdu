import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Tag, Typography, Card, Space, Empty } from 'antd';
import { ArrowLeft, Calendar, Pin, Eye, EyeOff } from 'lucide-react';
import { sample_notices } from '../../data/notice_data';

const { Title, Text, Paragraph } = Typography;

const NoticeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const notice = sample_notices.find((n) => n.id === id);

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

  if (!notice) {
    return (
      <div className="w-full">
        <Button
          type="text"
          icon={<ArrowLeft className="h-4 w-4" />}
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          Back to Notices
        </Button>
        <Empty
          description="Notice not found"
          className="py-12"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Button
        type="text"
        icon={<ArrowLeft className="h-4 w-4" />}
        onClick={() => navigate('/parent/notice')}
        className="mb-6 hover:bg-gray-100"
      >
        Back to Notices
      </Button>

      <Card className="shadow-sm border-gray-200">
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Tag
                  color={get_category_color(notice.category)}
                  className="capitalize"
                >
                  {notice.category}
                </Tag>
                {notice.is_pinned && (
                  <Tag
                    icon={<Pin className="h-3 w-3 inline mr-1" />}
                    color="orange"
                  >
                    Pinned
                  </Tag>
                )}
              </div>

              <Title
                level={2}
                className="!mb-0"
              >
                {notice.title}
              </Title>

              <Space
                size="large"
                className="text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <Text type="secondary">{notice.date}</Text>
                </div>
                <div className="flex items-center gap-2">
                  {notice.is_read ? (
                    <>
                      <Eye className="h-4 w-4" />
                      <Text type="secondary">Read</Text>
                    </>
                  ) : (
                    <>
                      <EyeOff className="h-4 w-4" />
                      <Text type="secondary">Unread</Text>
                    </>
                  )}
                </div>
              </Space>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <Paragraph className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
            {notice.content}
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default NoticeDetails;
