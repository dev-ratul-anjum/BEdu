import { ArrowLeft, Edit } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'antd';

export default function Teacher_profile() {
  const navigate = useNavigate();
  const { teacherId } = useParams();

  // Mock Data
  const teacher = {
    id: teacherId,
    name: 'Full Name',
    // In the wireframe, image is just a placeholder box, using a placeholder image for now
    avatar: 'https://placehold.co/200',
    email: 'xyz@xyz.com',
    phone: '+88017234523',
    dob: '05 Oct', // Wireframe format
    teacherType: 'Permanent',
    bloodGroup: 'O+',
    indexNumber: '543534',
    religion: 'Islam',
    skills: 'hebuye,ed ewrfuybwerf adjfvwef asfaefw asdfdwef',
    address: 'iwerhfbasdifh iebuybewr asdfbusad Bangladesh',
    // Using placeholders for documents
    cvPreview: 'https://placehold.co/300x400?text=CV+Preview',
    nidPreview: 'https://placehold.co/300x400?text=NID+Preview',
  };

  return (
    <div className="p-6">
      {/* Header */}
      <header className="mb-6 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">Teacher Profile</h1>
      </header>

      <div className="mx-auto max-w-5xl space-y-6">
        {/* Top Section: Photo + Info */}
        <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {/* Edit Button (Absolute Top Right) */}
          <div className="absolute right-8 top-8">
            <Button
              icon={<Edit size={16} />}
              className="flex items-center gap-2 border-primary text-primary hover:!border-primary hover:!text-primary"
            >
              Edit
            </Button>
          </div>

          <div className="flex flex-col gap-8 md:flex-row">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="h-48 w-48 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <img
                  src={teacher.avatar}
                  alt="Teacher"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium text-slate-500">Photos</p>
            </div>

            {/* Info Grid */}
            <div className="flex-grow pt-2">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:gap-x-12">
                {/* Column 1 */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Full Name</p>
                    <p className="text-lg font-semibold text-slate-800">{teacher.name}</p>
                    <p className="text-sm text-slate-600">Xyz</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Phone</p>
                    <p className="text-base font-medium text-slate-800">{teacher.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Teacher Type</p>
                    <p className="text-base font-medium text-slate-800">{teacher.teacherType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Index Number</p>
                    <p className="text-base font-medium text-slate-800">{teacher.indexNumber}</p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <p className="text-base font-medium text-slate-800">{teacher.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Date Of Bith</p>
                    <p className="text-base font-medium text-slate-800">{teacher.dob}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Blood Group</p>
                    <p className="text-base font-medium text-slate-800">{teacher.bloodGroup}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Religion</p>
                    <p className="text-base font-medium text-slate-800">{teacher.religion}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Skills & Address */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div className="flex gap-2">
              <span className="min-w-[80px] font-semibold text-slate-700">Skills :</span>
              <span className="text-slate-600">{teacher.skills}</span>
            </div>
            <div className="flex gap-2">
              <span className="min-w-[80px] font-semibold text-slate-700">Address:</span>
              <span className="text-slate-600">{teacher.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Previews */}
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50">
              {/* Placeholder for CV Preview */}
              <div className="flex h-full w-full items-center justify-center text-blue-300">
                {/* Using a pattern or just simple background */}
                <div className="bg-[image:repeating-linear-gradient(45deg,#3b82f6_0,#3b82f6_1px,transparent_0,transparent_10px)] h-full w-full opacity-10"></div>
              </div>
            </div>
            <p className="mt-3 text-center font-medium text-slate-700">CV Preview</p>
          </div>

          <div className="flex-1">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50">
              {/* Placeholder for NID Preview */}
              <div className="flex h-full w-full items-center justify-center text-blue-300">
                <div className="bg-[image:repeating-linear-gradient(45deg,#3b82f6_0,#3b82f6_1px,transparent_0,transparent_10px)] h-full w-full opacity-10"></div>
              </div>
            </div>
            <p className="mt-3 text-center font-medium text-slate-700">NID Preview</p>
          </div>

          {/* Spacer for 4 column grid in wireframe vs 2 used here? 
                The wireframe shows 2 boxes. I used flex row.
             */}
          <div className="flex-1 md:hidden lg:flex-1 lg:block hidden opacity-0"></div>
          <div className="flex-1 md:hidden lg:flex-1 lg:block hidden opacity-0"></div>
        </div>
      </div>
    </div>
  );
}
