import React, { useState } from 'react';
import { Card, Row, Col, Select, Button, Tag, Radio, Divider } from 'antd';
const { Option } = Select;

interface FeeDetail {
    title: string;
    amount: number;
}

interface MonthFee {
    month: string;
    details: FeeDetail[];
    status: 'Paid' | 'Unpaid';
}

const feesData: MonthFee[] = [
    {
        month: 'January',
        details: [
            { title: 'Tuition', amount: 2000 },
            { title: 'Library', amount: 500 },
            { title: 'Computer Lab', amount: 500 },
            { title: 'Sports', amount: 500 },
        ],
        status: 'Unpaid',
    },
    {
        month: 'February',
        details: [
            { title: 'Tuition', amount: 2000 },
            { title: 'Library', amount: 500 },
            { title: 'Computer Lab', amount: 500 },
            { title: 'Sports', amount: 500 },
        ],
        status: 'Paid',
    },
];

const banks = ['Bank A', 'Bank B', 'Bank C', 'Bank D'];

const Student_fees: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>('January');
    const [selectedBank, setSelectedBank] = useState<string>(banks[0]);
    const [paymentMethod, setPaymentMethod] = useState<'SSL' | 'Online'>('SSL');

    const month = feesData.find(m => m.month === selectedMonth)!;
    const total = month.details.reduce((sum, d) => sum + d.amount, 0);

    const handlePay = () => {
        alert(
            `Redirecting to ${
                paymentMethod === 'SSL' ? 'SSLCommerz' : 'Online Banking'
            } payment for ${selectedMonth}: ৳ ${total} via ${selectedBank}`
        );
    };

    const downloadReceipt = () => {
        alert(`Download PDF receipt for ${selectedMonth}`);
    };

    return (
        <div style={{ padding: 10 }}>
            <Row gutter={24}>
                {/* Left Column - Fee Details */}
                <Col span={12}>
                    <Card
                        title={
                            <Row justify="space-between">
                                <Col>
                                    <b>Monthly Fees</b>
                                </Col>
                                <Col>
                                    <Select
                                        value={selectedMonth}
                                        onChange={setSelectedMonth}
                                        style={{ width: 140 }}
                                    >
                                        {feesData.map(f => (
                                            <Option
                                                key={f.month}
                                                value={f.month}
                                            >
                                                {f.month}
                                            </Option>
                                        ))}
                                    </Select>
                                </Col>
                            </Row>
                        }
                    >
                        {/* Fee Breakdown */}
                        <Card style={{ marginTop: 10 }}>
                            <h3>{selectedMonth} Fee Breakdown</h3>
                            {month.details.map((d, i) => (
                                <Row
                                    key={i}
                                    style={{
                                        padding: '8px 0',
                                        borderBottom: '1px solid #f0f0f0',
                                    }}
                                >
                                    <Col span={12}>{d.title}</Col>
                                    <Col
                                        span={12}
                                        style={{
                                            textAlign: 'right',
                                            fontWeight: 700,
                                        }}
                                    >
                                        ৳ {d.amount}
                                    </Col>
                                </Row>
                            ))}
                            <Row style={{ marginTop: 10, fontWeight: 800 }}>
                                <Col span={12}>Total</Col>
                                <Col
                                    span={12}
                                    style={{ textAlign: 'right' }}
                                >
                                    ৳ {total}
                                </Col>
                            </Row>
                        </Card>

                        {/* Status */}
                        <Row style={{ marginTop: 16 }}>
                            <Col span={12}>
                                <Tag
                                    color={
                                        month.status === 'Paid'
                                            ? 'green'
                                            : 'red'
                                    }
                                    style={{
                                        fontSize: 16,
                                        padding: '8px 12px',
                                    }}
                                >
                                    {month.status}
                                </Tag>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                {/* Right Column - Payment Section */}
                <Col span={12}>
                    <Card
                        title="Payment Options"
                        style={{ marginTop: 0 }}
                    >
                        {month.status === 'Unpaid' ? (
                            <>
                                <Radio.Group
                                    value={paymentMethod}
                                    onChange={e =>
                                        setPaymentMethod(
                                            e.target.value as 'SSL' | 'Online'
                                        )
                                    }
                                    style={{ marginBottom: 16 }}
                                >
                                    <Radio value="SSL">SSLCommerz</Radio>
                                    <Radio value="Online">Online Banking</Radio>
                                </Radio.Group>

                                <Divider />

                                <div style={{ marginBottom: 16 }}>
                                    <b>Select Bank:</b>
                                    <Select
                                        value={selectedBank}
                                        onChange={setSelectedBank}
                                        style={{ width: '100%', marginTop: 8 }}
                                    >
                                        {banks.map(b => (
                                            <Option
                                                key={b}
                                                value={b}
                                            >
                                                {b}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>

                                <Button
                                    type="primary"
                                    block
                                    onClick={handlePay}
                                >
                                    Pay Now (৳ {total})
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    type="default"
                                    block
                                    onClick={downloadReceipt}
                                    style={{ marginBottom: 8 }}
                                >
                                    Download Receipt
                                </Button>
                                <Button
                                    type="default"
                                    block
                                    onClick={() => window.print()}
                                >
                                    Print
                                </Button>
                            </>
                        )}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Student_fees;
