import Student_attendance from '@/features/student/pages/student_attendance/Student_attendance';
import Student_profile from '@/features/student/pages/student_profile/Student_profile';
import Student_routine from '@/features/student/pages/student_routine/Student_routine';
import Student from '@/features/student/Student';
import Student_payment_history from '@/features/student/pages/student_payment_history/Student_payment_history';
import Student_fees from '@/features/student/pages/fees_status/Fees_status';

const student_router = [
    {
        path: '',
        element: <Student />,
    },
    {
        path: 'routine',
        element: <Student_routine />,
    },
    {
        path: 'profile',
        element: (
            <Student_profile
                student={{
                    id: 1,
                    name: 'John Doe',
                    age: 16,
                    grade: '10th Grade',
                    email: 'johndoe@gmail.com',
                    phone: '123-456-7890',
                    address: '123 Main St, Cityville',
                    profilePicture:
                        'https://randomuser.me/api/portraits/men/75.jpg',
                    subjects: ['Math', 'Science', 'History', 'English'],
                    attendance: 95,
                    extraActivities: ['Basketball', 'Debate Club'],
                }}
            />
        ),
    },
    {
        path: 'attendance',
        element: <Student_attendance />,
    },
    {
        path: 'fees',
        element: <Student_fees />,
    },
    {
        path: 'payment-history',
        element: <Student_payment_history />,
    },
];

export default student_router;
