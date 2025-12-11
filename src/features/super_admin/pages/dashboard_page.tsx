import { AlertTriangle, Bell, Briefcase, Table, UserCheck, Users } from 'lucide-react';

export default function Dashboard_page() {
  const stats = [
    {
      id: 1,
      label: 'মোট ছাত্র/ছাত্রী',
      value: '১,৫৫০',
      icon: Users,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      id: 2,
      label: 'মোট শিক্ষক',
      value: '৪৫',
      icon: Briefcase,
      color: 'text-green-600 bg-green-100',
    },
    {
      id: 3,
      label: 'আজকের উপস্থিতি',
      value: '৯২%',
      icon: UserCheck,
      color: 'text-yellow-600 bg-yellow-100',
    },
    {
      id: 4,
      label: 'বকেয়া ফি',
      value: '৳ ২.৫ লাখ',
      icon: AlertTriangle,
      color: 'text-red-600 bg-red-100',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <Table className="h-5 w-5 text-blue-500" /> <span>সিস্টেম ওভারভিউ</span>
          </h4>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border">
              <p className="text-lg font-semibold text-gray-700">গুরুত্বপূর্ণ সতর্কতা</p>
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertTriangle className="h-4 w-4 mr-1" /> ২ টি বায়োমেট্রিক ডিভাইস অফলাইন।
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border">
              <p className="text-lg font-semibold text-gray-700">চলমান কার্যক্রম</p>
              <p className="text-green-600 text-sm mt-1">
                ক্লাস ১০ এর রেজাল্ট প্রসেসিং চলছে - ৮০% সম্পূর্ণ।
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border">
              <p className="text-lg font-semibold text-gray-700">মাসিক ফিন্যান্স রিপোর্ট</p>
              <p className="text-blue-600 text-sm mt-1">গত মাসের তুলনায় ফি সংগ্রহে ৫% বৃদ্ধি।</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <Bell className="h-5 w-5 text-yellow-500" /> <span>সাম্প্রতিক নোটিশ</span>
          </h4>
          <ul className="space-y-4">
            <li className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <p className="font-semibold text-gray-800 text-sm">
                বার্ষিক ক্রীড়া প্রতিযোগিতা: রুটিন প্রকাশ।
              </p>
              <p className="text-xs text-gray-500">সময়: ২০ নভেম্বর, ২০২৪</p>
            </li>
            <li className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-gray-800 text-sm">শিক্ষক-অভিভাবক সভা (PTM) ঘোষণা।</p>
              <p className="text-xs text-gray-500">সময়: ১৭ নভেম্বর, ২০২৪</p>
            </li>
            <li className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-gray-800 text-sm">
                নভেম্বর মাসের বেতন পরিশোধের শেষ তারিখ।
              </p>
              <p className="text-xs text-gray-500">সময়: ১০ নভেম্বর, ২০২৪</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
