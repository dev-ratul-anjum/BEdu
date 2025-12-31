import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import Profile_pic from '../../components/profile_pic/Profile_pic';
import { Notice_detail_card } from './components/Notice_details_card';

const { Sider, Content } = Layout;

export default function Detail_notice() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/parent/login');
  };
  return (
    <div>
      <div className="flex justify-between mt-4">
        <Dynamic_breadcrumb />
        <Profile_pic
          onProfile={() => navigate('/parent/profile')}
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
