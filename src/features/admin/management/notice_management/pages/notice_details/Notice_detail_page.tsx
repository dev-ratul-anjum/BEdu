import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import Profile_pic from '@/features/parent/components/profile_pic/Profile_pic';
import { Notice_detail_card } from '@/features/parent/pages/detail_notice/components/Notice_details_card';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider, Content } = Layout;

export default function Notice_detail_page() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <div>
      <div className="flex justify-between mt-4">
        <Dynamic_breadcrumb />
        <Profile_pic
          onProfile={() => navigate('/admin/profile')}
          onLogout={handleLogout}
        />
      </div>
      <div>
        <Notice_detail_card
          title="Notice Title"
          date="2023-01-01"
          description={'This is a notice description'}
        />
      </div>
    </div>
  );
}
