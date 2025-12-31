import { Monthly_attendance_card } from './components/monthly_attendance_card/Monthly_attendance_card';
import { useNavigate } from 'react-router-dom';
import Profile_pic from '../../components/profile_pic/Profile_pic';
import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';

export default function AttendancePage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/parent/login');
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between mt-4">
        <Dynamic_breadcrumb />
        <Profile_pic
          onProfile={() => navigate('/parent/profile')}
          onLogout={handleLogout}
        />
      </div>
      <Monthly_attendance_card
        studentName="XYZ"
        month="November"
        year={2025}
        attendance={[
          { date: 1, status: 'P' },
          { date: 2, status: 'A' },
          { date: 3, status: 'P' },
          { date: 4, status: 'L' },
          { date: 5, status: 'A' },
          { date: 6, status: 'W' },
          { date: 7, status: 'W' },
          { date: 8, status: 'P' },
          { date: 9, status: 'P' },
          { date: 10, status: 'A' },
          { date: 11, status: 'A' },
          { date: 12, status: 'A' },
          { date: 13, status: 'W' },
          { date: 14, status: 'W' },
          { date: 15, status: 'P' },
          { date: 16, status: 'P' },
          { date: 17, status: 'P' },
          { date: 18, status: 'P' },
          { date: 19, status: 'P' },
          { date: 20, status: 'W' },
          { date: 21, status: 'W' },
          { date: 22, status: 'P' },
          { date: 23, status: 'P' },
          { date: 24, status: 'P' },
          { date: 25, status: 'P' },
          { date: 26, status: 'A' },
          { date: 27, status: 'W' },
          { date: 28, status: 'W' },
          { date: 29, status: 'P' },
          { date: 30, status: 'P' },
          { date: 31, status: 'P' },
        ]}
      />

      <Monthly_attendance_card
        studentName="XYZ"
        month="December"
        year={2025}
        attendance={[
          { date: 1, status: 'P' },
          { date: 2, status: 'A' },
          { date: 3, status: 'P' },
          { date: 4, status: 'L' },
          { date: 5, status: 'A' },
          { date: 6, status: 'W' },
          { date: 7, status: 'W' },
          { date: 8, status: 'P' },
          { date: 9, status: 'P' },
          { date: 10, status: 'A' },
          { date: 11, status: 'A' },
          { date: 12, status: 'A' },
          { date: 13, status: 'W' },
          { date: 14, status: 'W' },
          { date: 15, status: 'P' },
          { date: 16, status: 'P' },
          { date: 17, status: 'P' },
          { date: 18, status: 'P' },
          { date: 19, status: 'P' },
          { date: 20, status: 'W' },
          { date: 21, status: 'W' },
          { date: 22, status: 'P' },
          { date: 23, status: 'P' },
          { date: 24, status: 'P' },
          { date: 25, status: 'P' },
          { date: 26, status: 'A' },
          { date: 27, status: 'W' },
          { date: 28, status: 'W' },
          { date: 29, status: 'P' },
          { date: 30, status: 'P' },
          { date: 31, status: 'P' },
        ]}
      />
      <Monthly_attendance_card
        studentName="XYZ"
        month="January"
        year={2026}
        attendance={[{ date: 1, status: 'P' }]}
      />
    </div>
  );
}
