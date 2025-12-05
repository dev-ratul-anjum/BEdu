import React from 'react';
import { DatePicker, Calendar, Card, Row, Col, Button } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import Student_card from '../../components/Student_card';

const { RangePicker } = DatePicker;

const Student_attendance: React.FC = () => {
    const startDate = dayjs('2025-01-01');
    const endDate = dayjs('2025-01-10');

    // Static Attendance Data
    const attendanceData = [
        { date: '2025-01-01', status: 'Present' },
        { date: '2025-01-02', status: 'Absent' },
        { date: '2025-01-03', status: 'Present' },
        { date: '2025-01-04', status: 'Present' },
        { date: '2025-01-05', status: 'Absent' },
        { date: '2025-01-06', status: 'Present' },
        { date: '2025-01-07', status: 'Present' },
        { date: '2025-01-08', status: 'Absent' },
        { date: '2025-01-09', status: 'Present' },
        { date: '2025-01-10', status: 'Present' },
    ];

    const renderCalendarCell = (value: Dayjs) => {
        const weekday = value.day(); // 0=Sunday, 5=Friday, 6=Saturday

        // 🔸 Mark Friday & Saturday as OFF DAYS
        if (weekday === 5 || weekday === 6) {
            return (
                <div
                    style={{
                        marginTop: 3,
                        padding: '5px',
                        borderRadius: 6,
                        background: '#fff7ba',
                        textAlign: 'center',
                        color: '#ad6800',
                        fontWeight: 600,
                        fontSize: 12,
                    }}
                >
                    OFF DAY
                </div>
            );
        }

        // 🔹 Find attendance record
        const record = attendanceData.find(
            rec => rec.date === value.format('YYYY-MM-DD')
        );

        if (!record) return null;

        // 🔸 Color coding
        const bgColor = record.status === 'Present' ? '#d9f7be' : '#ffa39e';
        const textColor = record.status === 'Present' ? '#237804' : '#a8071a';

        return (
            <div
                style={{
                    marginTop: 3,
                    padding: '5px',
                    borderRadius: 6,
                    background: bgColor,
                    textAlign: 'center',
                    color: textColor,
                    fontWeight: 600,
                    fontSize: 12,
                }}
            >
                {record.status}
            </div>
        );
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <Student_card
                    title="Total Attendance of This Month"
                    value={28}
                    color="#52c41a"
                />
                <Student_card
                    title="Total Absence of This Month"
                    value={2}
                    color="#faad14"
                />
            </div>
            <div
                style={{
                    padding: 10,
                    justifyContent: 'center',
                    display: 'flex',
                }}
            >
                <Card
                    title="Student Attendance"
                    style={{ margin: 'auto', justifyContent: 'center' }}
                >
                    {/* Date Selection */}
                    <Row
                        gutter={20}
                        style={{ marginBottom: 20 }}
                    >
                        <Col span={12}>
                            <RangePicker style={{ width: '100%' }} />
                        </Col>

                        <Col span={6}>
                            <Button
                                type="primary"
                                block
                            >
                                Show Attendance
                            </Button>
                        </Col>
                    </Row>

                    {/* Calendar */}
                    <Calendar
                        fullscreen={true}
                        dateCellRender={renderCalendarCell}
                        validRange={[startDate, endDate]}
                    />
                </Card>
            </div>
        </div>
    );
};

export default Student_attendance;
