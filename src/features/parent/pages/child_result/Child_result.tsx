import React, { useMemo, useState } from 'react';
import { Space, Typography } from 'antd';
import Result_Header from './components/Result_header';
import Result_Overview from './components/Result_overview';
import Results_Table from './components/Results_table';

const { Title } = Typography;

interface Subject_Result {
    key: string | number;
    subject: string;
    marks: number;
    total: number;
    grade: string;
    remark?: string;
}

const sample_results: Record<string, Subject_Result[]> = {
    'Term 1': [
        { key: 1, subject: 'Mathematics', marks: 92, total: 100, grade: 'A+' },
        { key: 2, subject: 'English', marks: 85, total: 100, grade: 'A' },
        { key: 3, subject: 'Science', marks: 78, total: 100, grade: 'B+' },
        {
            key: 4,
            subject: 'Social Studies',
            marks: 88,
            total: 100,
            grade: 'A',
        },
        {
            key: 5,
            subject: 'Computer Science',
            marks: 95,
            total: 100,
            grade: 'A+',
        },
    ],
    'Term 2': [
        { key: 1, subject: 'Mathematics', marks: 89, total: 100, grade: 'A' },
        { key: 2, subject: 'English', marks: 80, total: 100, grade: 'A-' },
        { key: 3, subject: 'Science', marks: 82, total: 100, grade: 'A-' },
        {
            key: 4,
            subject: 'Social Studies',
            marks: 84,
            total: 100,
            grade: 'A',
        },
        {
            key: 5,
            subject: 'Computer Science',
            marks: 90,
            total: 100,
            grade: 'A+',
        },
    ],
    Final: [
        { key: 1, subject: 'Mathematics', marks: 90, total: 100, grade: 'A+' },
        { key: 2, subject: 'English', marks: 83, total: 100, grade: 'A' },
        { key: 3, subject: 'Science', marks: 80, total: 100, grade: 'A-' },
        {
            key: 4,
            subject: 'Social Studies',
            marks: 86,
            total: 100,
            grade: 'A',
        },
        {
            key: 5,
            subject: 'Computer Science',
            marks: 94,
            total: 100,
            grade: 'A+',
        },
    ],
};

const Child_result: React.FC = () => {
    const [selected_exam, set_selected_exam] = useState<string>('Term 1');

    // student name shown in header (replace with real data when available)
    const student_name = 'Johnnie Rau';

    const subjects = useMemo(
        () => sample_results[selected_exam] || [],
        [selected_exam]
    );

    const average = useMemo(() => {
        if (!subjects.length) return 0;
        const avg =
            subjects.reduce((s, sub) => s + (sub.marks / sub.total) * 100, 0) /
            subjects.length;
        return Number(avg.toFixed(1));
    }, [subjects]);

    const overall_grade = useMemo(() => {
        if (average >= 90) return 'A+';
        if (average >= 80) return 'A';
        if (average >= 70) return 'B+';
        if (average >= 60) return 'B';
        return 'C';
    }, [average]);

    const exam_options = Object.keys(sample_results).map(k => ({
        label: k,
        value: k,
    }));

    return (
        <div className="w-full">
            <div className="mb-6">
                <Title
                    level={3}
                    className="!mb-0"
                >
                    Child Result
                </Title>
            </div>

            <Space
                direction="vertical"
                size="large"
                className="w-full"
            >
                <Result_Header
                    selected_exam={selected_exam}
                    on_exam_change={val => set_selected_exam(String(val))}
                    exam_options={exam_options}
                />

                <div className="mb-6">
                    <Result_Overview
                        overall_grade={overall_grade}
                        average={average}
                        total_subjects={subjects.length}
                    />
                </div>

                <Results_Table subjects={subjects} />
            </Space>
        </div>
    );
};

export default Child_result;
