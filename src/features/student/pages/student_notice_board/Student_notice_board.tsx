import React from 'react';
import { Card, List, Tag } from 'antd';

interface NoticeItem {
  title: string;
  date: string;
  type?: 'info' | 'warning' | 'urgent';
}

interface NoticeBoardProps {
  notices: NoticeItem[];
}

export default function Student_notice_board({ notices }: NoticeBoardProps) {
  const colorMap: any = {
    info: 'blue',
    warning: 'gold',
    urgent: 'red',
  };

  return (
    <Card
      title="Notice Board"
      bordered={true}
      style={{ width: '100%', maxWidth: 450, borderRadius: 16 }}
    >
      <List
        itemLayout="vertical"
        dataSource={notices}
        renderItem={(item) => (
          <List.Item>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                {item.type && (
                  <Tag
                    color={colorMap[item.type]}
                    style={{ fontSize: 12 }}
                  >
                    {item.type.toUpperCase()}
                  </Tag>
                )}
                <h3 style={{ margin: 0, fontSize: 16 }}>{item.title}</h3>
              </div>

              <span style={{ fontSize: 13, color: '#888' }}>{item.date}</span>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}
