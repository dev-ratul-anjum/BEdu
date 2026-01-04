import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { useNavigate } from 'react-router-dom';
import Profile_pic from './components/profile_pic/Profile_pic';
import { Student_card } from './components/student_card/Student_card';
import { Notice_carousel } from './components/notice_carousel/Notice_carousel';
import { Attendance_calendar } from './components/attendance_calender/Attendance_calender';

const Parent = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/parent/login');
  };

  interface AttendanceDay {
    date: number;
    dayOfWeek: number;
    status: 'present' | 'absent' | 'leave' | 'weekend';
  }

  interface MonthAttendance {
    month: string;
    year: number;
    days: AttendanceDay[];
  }

  interface AttendanceCalendarProps {
    monthData: MonthAttendance;
  }
  interface StudentData {
    name: string;
    rollNo: number;
    class: string;
    section: string;
    profilePic?: string;
  }
  interface Notice {
    id: number;
    title: string;
    date: string;
    content: string;
    type: 'event' | 'announcement' | 'urgent';
    icon: string;
  }

  const notices: Notice[] = [
    {
      id: 1,
      title: 'Event 1',
      date: '2023-01-01',
      content: 'Description for Event 1',
      type: 'event',
      icon: '/.png',
    },
    {
      id: 2,
      title: 'Event 2',
      date: '2023-01-02',
      content: 'Description for Event 2',
      type: 'event',
      icon: '/.png',
    },
  ];

  const studentData: StudentData = {
    name: 'John Doe',
    rollNo: 25,
    class: '10th',
    section: 'A',
    profilePic: '/.png',
  };

  const attendanceData: AttendanceCalendarProps = {
    monthData: {
      month: 'January',
      year: 2023,
      days: [
        { date: 1, dayOfWeek: 0, status: 'present' },
        { date: 2, dayOfWeek: 1, status: 'absent' },
        { date: 3, dayOfWeek: 2, status: 'leave' },
        { date: 4, dayOfWeek: 3, status: 'weekend' },
        { date: 5, dayOfWeek: 4, status: 'present' },
        { date: 6, dayOfWeek: 5, status: 'absent' },
        { date: 7, dayOfWeek: 6, status: 'leave' },
      ],
    },
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
      <div className="mt-4">
        <Notice_carousel notices={notices} />
      </div>
      <div className="mt-4">
        <Student_card student={studentData} />
      </div>
      <div className="mt-4">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate('/parent/all-attendance')}
        >
          See All
        </Button>
        <Attendance_calendar monthData={attendanceData.monthData} />
      </div>
    </div>
  );
};

export default Parent;
