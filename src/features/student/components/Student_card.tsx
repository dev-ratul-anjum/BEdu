import React from 'react';
import { Card } from 'antd';

interface InfoCardProps {
    title: string;
    value: string | number;
    color?: string; // background color
}

export default function InfoCard({
    title,
    value,
    color = '#1677ff',
}: InfoCardProps) {
    return (
        <div>
            <Card
                bordered={false}
                style={{
                    width: '100%',
                    maxWidth: 320,
                    borderRadius: 16,
                    background: color,
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px 10px',
                }}
                bodyStyle={{ padding: 0 }}
            >
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>
                    {title}
                </h2>

                <div
                    style={{
                        fontSize: 42,
                        fontWeight: 800,
                    }}
                >
                    {value}
                </div>
            </Card>
        </div>
    );
}
