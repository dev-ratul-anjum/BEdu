import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';

export const Fees_Overview: React.FC<{
    total_due: number;
    total_paid: number;
    overdue_count: number;
}> = ({ total_due, total_paid, overdue_count }) => {
    return (
        <Row
            gutter={16}
            className="mb-4"
        >
            <Col
                xs={24}
                sm={8}
            >
                <Card>
                    <Statistic
                        title="Total Due"
                        value={total_due}
                        precision={2}
                        prefix="৳"
                    />
                </Card>
            </Col>
            <Col
                xs={24}
                sm={8}
            >
                <Card>
                    <Statistic
                        title="Total Paid"
                        value={total_paid}
                        precision={2}
                        prefix="৳"
                    />
                </Card>
            </Col>
            <Col
                xs={24}
                sm={8}
            >
                <Card>
                    <Statistic
                        title="Overdue Invoices"
                        value={overdue_count}
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default Fees_Overview;
