import { Download, Edit, Printer } from 'lucide-react';
import { Dynamic_breadcrumb } from '../../../../common/components/Dynamic_breadcrumb';

export default function User_details_page() {
  const profile_data = [
    { label: 'Name:', value: 'Jessia Rose' },
    { label: 'Gender:', value: 'Female' },
    { label: 'Father Name:', value: 'Steve Jones' },
    { label: 'Mother Name:', value: 'Naomi Rose' },
    { label: 'Date Of Birth:', value: '07.08.2016' },
    { label: 'Religion:', value: 'Islam' },
    { label: 'Father Occupation:', value: 'Graphic Designer' },
    { label: 'E-mail:', value: 'jessiarose@gmail.com' },
    { label: 'Admission Date:', value: '07.08.2019' },
    { label: 'Class:', value: '2' },
    { label: 'Section:', value: 'Pink' },
    { label: 'Roll:', value: '10005' },
    { label: 'Address:', value: 'House #10, Road #6, Australia' },
    { label: 'Phone:', value: '+ 88 98568888418' },
  ];

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <main className="bg-white rounded-lg shadow-sm">
        {/* Content */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar Section */}
            <div className="flex-shrink-0 size-64">
              <img
                src="https://placehold.co/600x600"
                alt="student image"
              />
            </div>

            {/* Info Section */}
            <div className="flex-1">
              {/* Title and Description */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Jessia Rose</h2>
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Printer className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodales word moun
                  taiery. Aliquam erat volutpaturabiene natis massa sedde sodales word moun taiery.
                </p>
              </div>
              {/* Profile Details */}
              <div className="space-y-4">
                {profile_data.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                  >
                    <div className="w-48 text-gray-500 text-sm flex-shrink-0">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
