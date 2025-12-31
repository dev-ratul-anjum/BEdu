import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { Notice_card } from './components/notice_card/Notice_card';
import Profile_pic from '../../components/profile_pic/Profile_pic';
import { useNavigate } from 'react-router-dom';

const notices = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Notice Title ${i + 1}`,
  date: new Date(2025, 0, 15 - i).toLocaleDateString(),
}));

export default function All_notice_list() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice) => (
          <Notice_card
            key={notice.id}
            title={notice.title}
            date={notice.date}
            onClick={() => navigate(`/parent/detail-notice`)}
          />
        ))}
      </div>
    </div>
  );
}
