import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import Notice_adding_form from './components/notice_adding_form/Notice_adding_form';
import Profile_pic from '@/features/parent/components/profile_pic/Profile_pic';
import { useNavigate } from 'react-router-dom';

export interface NoticeFormValues {
  title: string;
  description: string;
  file?: File;
}

export default function Add_notice() {
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
      <Notice_adding_form onSubmit={(values) => console.log(values)} />
    </div>
  );
}
