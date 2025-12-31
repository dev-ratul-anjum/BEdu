import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import NoticeTable from './components/Notice_table';
import { useNavigate } from 'react-router-dom';
import Profile_pic from '@/features/parent/components/profile_pic/Profile_pic';
import { Button } from 'antd';

interface NoticeRecord {
  key: string;
  id: string;
  title: string;
  description: string;
  publishedDate: string;
  fileUrl?: string;
}

const mockData: NoticeRecord[] = [
  {
    key: '1',
    id: '1',
    title: 'New year vacation',
    description: 'content...',
    publishedDate: '20/09/2026',
    fileUrl: 'public/.png',
  },
];

export default function Notice_management() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <div>
      <div className="flex justify-between mt-4">
        <Dynamic_breadcrumb />
        <Profile_pic
          onProfile={() => navigate('management')}
          onLogout={handleLogout}
        />
      </div>

      <div>
        <Button
          type="primary"
          onClick={() => navigate('add-notice')}
        >
          Add Notice
        </Button>
      </div>
      <div className="mt-4">
        <NoticeTable
          data={mockData}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
    </div>
  );
}
