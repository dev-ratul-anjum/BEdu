import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { useNavigate } from 'react-router-dom';
import Profile_pic from '@/features/parent/components/profile_pic/Profile_pic';
import { Button } from 'antd';

const Student_history = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/parent/login');
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mt-4">
        <Dynamic_breadcrumb />
        <Profile_pic
          onProfile={() => navigate('/parent/profile')}
          onLogout={handleLogout}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Attendance
        </Button>
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Dues
        </Button>
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Class Routine
        </Button>
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Exams
        </Button>
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Fee
        </Button>
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Grades
        </Button>
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Homework
        </Button>
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Library
        </Button>
        <Button
          className="bg-blue-400 text-white text-xl px-4 py-10 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          Medical
        </Button>
      </div>
    </div>
  );
};

export default Student_history;
