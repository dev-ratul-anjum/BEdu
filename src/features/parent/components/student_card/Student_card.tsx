import { Card, Image } from 'antd';
import { useNavigate } from 'react-router-dom';

interface StudentData {
  name: string;
  rollNo: number;
  class: string;
  section: string;
  profilePic?: string;
}

interface StudentInfoCardProps {
  student: StudentData;
}

export const Student_card: React.FC<StudentInfoCardProps> = ({ student }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      onClick={() => navigate('/parent/student-history')}
      className="bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm 
                 p-6 rounded-xl overflow-hidden 
                 cursor-pointer transition-all 
                 hover:border-cyan-500/50 hover:shadow-lg"
    >
      <div className="flex gap-8">
        {/* Student Photo */}
        <div
          className="w-32 h-32 flex-shrink-0 
                        bg-gradient-to-br from-cyan-500/20 to-blue-500/20 
                        border-2 border-cyan-500/30 
                        rounded-xl flex items-center justify-center"
        >
          <div className="text-center">
            <Image
              src={student.profilePic}
              alt={student.name}
              width={128}
              height={128}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Student Info */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-3">
            <div className="flex items-baseline gap-4">
              <span className="text-slate-400 font-medium min-w-20">Name:</span>
              <span className="text-slate-100 text-lg font-semibold">{student.name}</span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-slate-400 font-medium min-w-20">Class:</span>
              <span className="text-slate-100 font-semibold">{student.class}</span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-slate-400 font-medium min-w-20">Section:</span>
              <span className="text-slate-100 font-semibold">{student.section}</span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-slate-400 font-medium min-w-20">Roll:</span>
              <span className="text-slate-100 font-semibold">{student.rollNo}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
