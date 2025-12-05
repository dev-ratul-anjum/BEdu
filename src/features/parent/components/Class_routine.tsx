import React from 'react';
import { Card, Tabs, Typography, Empty, Alert } from 'antd';

const { Text, Paragraph } = Typography;

interface ClassSession {
    time: string;
    subject: string;
    room: string;
    teacher: string;
}

interface DaySchedule {
    day: string;
    isHoliday?: boolean;
    sessions: ClassSession[];
}

interface ClassRoutineProps {
    schedule?: DaySchedule[];
    selectedClass?: string;
    holidays?: string[];
}

const ClassRoutine: React.FC<ClassRoutineProps> = ({
    schedule,
    selectedClass = 'CLASS I (A)',
    holidays = ['Friday', 'Sunday'],
}) => {
    // Default 7-day schedule
    const defaultSchedule: DaySchedule[] = [
        {
            day: 'Saturday',
            isHoliday: false,
            sessions: [
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Bangla (ENG-123)',
                    room: '01',
                    teacher: 'Dorrick',
                },
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Math (CS-123)',
                    room: '02',
                    teacher: 'Mason',
                },
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Algorithm (DK-123)',
                    room: '03',
                    teacher: 'Geovany',
                },
            ],
        },
        {
            day: 'Sunday',
            isHoliday: holidays.includes('Sunday'),
            sessions: [],
        },
        {
            day: 'Monday',
            isHoliday: false,
            sessions: [
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Bangla (ENG-123)',
                    room: '01',
                    teacher: 'Dorrick',
                },
                {
                    time: '09:45 AM - 10:30 AM',
                    subject: 'Math (CS-123)',
                    room: '01',
                    teacher: 'Mason',
                },
                {
                    time: '11:15 AM - 12:00 PM',
                    subject: 'Algorithm (DK-123)',
                    room: '01',
                    teacher: 'Geovany',
                },
            ],
        },
        {
            day: 'Tuesday',
            isHoliday: holidays.includes('Tuesday'),
            sessions: [
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Bangla (ENG-123)',
                    room: '01',
                    teacher: 'Dorrick',
                },
                {
                    time: '09:45 AM - 10:15 AM',
                    subject: 'Math (CS-123)',
                    room: '01',
                    teacher: 'Mason',
                },
                {
                    time: '10:15 AM - 8:00 AM',
                    subject: 'Algorithm (DK-123)',
                    room: '01',
                    teacher: 'Geovany',
                },
            ],
        },
        {
            day: 'Wednesday',
            isHoliday: holidays.includes('Wednesday'),
            sessions: [
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Bangla (ENG-123)',
                    room: '01',
                    teacher: 'Dorrick',
                },
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Math (CS-123)',
                    room: '02',
                    teacher: 'Mason',
                },
            ],
        },
        {
            day: 'Thursday',
            isHoliday: holidays.includes('Thursday'),
            sessions: [
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Bangla (ENG-123)',
                    room: '01',
                    teacher: 'Dorrick',
                },
                {
                    time: '09:00 AM - 09:45 AM',
                    subject: 'Math (CS-123)',
                    room: '02',
                    teacher: 'Mason',
                },
            ],
        },
        {
            day: 'Friday',
            isHoliday: holidays.includes('Friday'),
            sessions: [],
        },
    ];

    const fullSchedule = schedule || defaultSchedule;

    const tabItems = fullSchedule.map(daySchedule => ({
        key: daySchedule.day.toLowerCase(),
        label: daySchedule.day,
        children: (
            <div className="space-y-4">
                {daySchedule.isHoliday ? (
                    <Alert
                        message="Holiday"
                        description={`${daySchedule.day} is marked as a holiday. No classes scheduled.`}
                        type="info"
                        showIcon
                        className="!mb-4"
                    />
                ) : daySchedule.sessions.length > 0 ? (
                    daySchedule.sessions.map((session, idx) => (
                        <div
                            key={idx}
                            className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <Text className="text-gray-500 text-xs">
                                        Time
                                    </Text>
                                    <Paragraph className="!mb-0 text-sm font-medium">
                                        {session.time}
                                    </Paragraph>
                                </div>
                                <div>
                                    <Text className="text-gray-500 text-xs">
                                        Subject
                                    </Text>
                                    <Paragraph className="!mb-0 text-sm font-medium text-blue-600">
                                        {session.subject}
                                    </Paragraph>
                                </div>
                                <div>
                                    <Text className="text-gray-500 text-xs">
                                        Room
                                    </Text>
                                    <Paragraph className="!mb-0 text-sm font-medium">
                                        {session.room}
                                    </Paragraph>
                                </div>
                                <div>
                                    <Text className="text-gray-500 text-xs">
                                        Teacher
                                    </Text>
                                    <Paragraph className="!mb-0 text-sm font-medium text-gray-700">
                                        {session.teacher}
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <Empty description="No classes scheduled" />
                )}
            </div>
        ),
    }));

    return (
        <Card className="shadow-sm border-gray-200">
            <div className="mb-6">
                <Text className="text-sm text-gray-500">Class</Text>
                <Paragraph className="!mb-0 text-base font-semibold text-gray-800">
                    {selectedClass}
                </Paragraph>
            </div>
            <Tabs items={tabItems} />
        </Card>
    );
};

export default ClassRoutine;
