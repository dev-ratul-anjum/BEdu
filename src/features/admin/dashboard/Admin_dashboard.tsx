import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap } from 'lucide-react';
import Calendar from './components/Calender';
import Custom_bar_chart from './components/Custom_bar_chart';

/**
 * ------------------------------------------------------------------
 * MOCK DATA & API LAYER
 * ------------------------------------------------------------------
 */
const mockAxios = {
  get: (url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (url === '/api/students/history') {
          resolve({
            total: 2500,
            data: [
              { day: 'Mon', present: 2200, absent: 300 },
              { day: 'Tue', present: 2250, absent: 250 },
              { day: 'Wed', present: 2100, absent: 400 },
              { day: 'Thu', present: 2300, absent: 200 },
              { day: 'Fri', present: 2200, absent: 300 }, // 88% of 2500
              { day: 'Sat', present: 2000, absent: 500 },
              { day: 'Sun', present: 0, absent: 0 },
            ],
          });
        } else if (url === '/api/teachers/history') {
          resolve({
            total: 150,
            data: [
              { day: 'Mon', present: 145, absent: 5 },
              { day: 'Tue', present: 148, absent: 2 },
              { day: 'Wed', present: 140, absent: 10 },
              { day: 'Thu', present: 142, absent: 8 },
              { day: 'Fri', present: 132, absent: 18 }, // 88% of 150
              { day: 'Sat', present: 135, absent: 15 },
              { day: 'Sun', present: 0, absent: 0 },
            ],
          });
        }
      }, 500);
    });
  },
};

const useQuery = ({ queryKey, queryFn }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    queryFn().then((res) => {
      if (isMounted) {
        setData(res);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(queryKey)]);

  return { data, isLoading };
};

export default function Admin_dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: students } = useQuery({
    queryKey: ['stu'],
    queryFn: () => mockAxios.get('/api/students/history'),
  });
  const { data: teachers } = useQuery({
    queryKey: ['tea'],
    queryFn: () => mockAxios.get('/api/teachers/history'),
  });

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">
          {/* Top Summary Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-600 rounded-3xl p-6 flex items-center gap-6 shadow-xl shadow-blue-200">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                <GraduationCap size={32} />
              </div>
              <div>
                <p className="text-blue-100 font-medium">Total Students</p>
                <h3 className="text-3xl font-bold text-white">2,500</h3>
              </div>
            </div>
            <div className="bg-orange-500 rounded-3xl p-6 flex items-center gap-6 shadow-xl shadow-orange-200">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                <Users size={32} />
              </div>
              <div>
                <p className="text-orange-100 font-medium">Total Teachers</p>
                <h3 className="text-3xl font-bold text-white">150</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 min-[1500px]:grid-cols-3 gap-8">
            <div className="min-[1500px]:col-span-2 space-y-8">
              <Custom_bar_chart
                title="Students History"
                type="std"
                data={students?.data}
                totalCount={2500}
              />
              <Custom_bar_chart
                title="Teachers History"
                type="tch"
                data={teachers?.data}
                totalCount={150}
              />
            </div>
            <div className="min-[1500px]:col-span-1">
              <Calendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
