import { Table, Button, Space, Image } from 'antd';
import { Eye, Edit, Trash2 } from 'lucide-react';
import type { ColumnsType } from 'antd/es/table';
import { Link, useNavigate } from 'react-router-dom';

export interface NoticeRecord {
  key: string;
  id: string;
  title: string;
  description: string;
  publishedDate: string;
  fileUrl?: string;
}

interface NoticeTableProps {
  data: NoticeRecord[];
  onEdit?: (record: NoticeRecord) => void;
  onDelete?: (record: NoticeRecord) => void;
}

export default function Notice_table({ data, onEdit, onDelete }: NoticeTableProps) {
  const navigate = useNavigate();
  const columns: ColumnsType<NoticeRecord> = [
    {
      title: '',
      width: 70,
      render: (_, record) =>
        record.fileUrl ? (
          <Image
            src={record.fileUrl}
            width={36}
            height={36}
            className="rounded-md object-cover"
            preview
          />
        ) : (
          <div className="w-9 h-9 border border-gray-300 rounded-md flex items-center justify-center text-xs text-gray-400">
            N/A
          </div>
        ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Published Date',
      dataIndex: 'publishedDate',
      key: 'publishedDate',
    },
    {
      title: 'Action',
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Link to={`notice-details`}>
            <Button
              type="text"
              icon={
                <Eye
                  className="w-4 h-4"
                  onClick={() => navigate(`notice-details`)}
                />
              }
            />
          </Link>

          <Button
            type="text"
            icon={<Edit className="w-4 h-4 text-blue-500" />}
            onClick={() => onEdit?.(record)}
          />

          <Button
            type="text"
            icon={<Trash2 className="w-4 h-4 text-red-500" />}
            onClick={() => onDelete?.(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="id"
      className="border border-gray-200 rounded-lg"
    />
  );
}
