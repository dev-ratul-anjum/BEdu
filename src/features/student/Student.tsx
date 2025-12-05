import React from 'react';
import Student_routine from './pages/student_routine/Student_routine';
import Student_card from './components/Student_card';
import Student_notice_board from './pages/student_notice_board/Student_notice_board';

const Student = () => {
    return (
        <div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <Student_card
                    title="Total Attendance This Month"
                    value={28}
                    color="#52c41a"
                />
                <Student_card
                    title="Total Classes This Month"
                    value={30}
                    color="#faad14"
                />
                <Student_card
                    title="Total Absence This Month"
                    value={2}
                    color="#1890ff"
                />
                <Student_card
                    title="Payment status of This Month"
                    value={'Paid'}
                    color="#1890ff"
                />
            </div>
            <div>
                <Student_routine />
            </div>
            <div>
                <Student_notice_board
                    notices={[
                        {
                            title: 'Exam schedule published',
                            date: '2025-12-03',
                            type: 'info',
                        },
                        {
                            title: 'Emergency meeting at 3 PM',
                            date: '2025-12-02',
                            type: 'urgent',
                        },
                        {
                            title: 'No classes on Friday',
                            date: '2025-12-01',
                            type: 'warning',
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default Student;
