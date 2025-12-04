import React from 'react';
import { Card, Select, Button, Typography } from 'antd';
import { Download, FileText } from 'lucide-react';

const { Title } = Typography;

interface Result_HeaderProps {
    selected_exam: string;
    on_exam_change: (exam: string) => void;
    exam_options: { label: string; value: string }[];
}

const Result_Header: React.FC<Result_HeaderProps> = ({
    selected_exam,
    on_exam_change,
    exam_options,
}) => {
    return (
        <Card className="shadow-sm border-gray-200 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-cyan-500" />
                    <Title
                        level={4}
                        className="!mb-0 !text-xl !font-semibold"
                    >
                        Result Overview
                    </Title>
                </div>

                <div className="flex items-center gap-3">
                    <Select
                        value={selected_exam}
                        onChange={on_exam_change}
                        options={exam_options}
                        style={{ width: 160 }}
                    />

                    <Button
                        type="primary"
                        icon={<Download className="h-4 w-4" />}
                    >
                        Download
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default Result_Header;
