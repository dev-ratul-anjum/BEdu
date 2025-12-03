import React from 'react';
import { Row, Col, Button, Input, Select, Space } from 'antd';
import { Search } from 'lucide-react';

const { Option } = Select;

export const Fees_Header: React.FC<{
    month?: string;
    year?: string;
    on_month_change?: (val: string) => void;
    on_year_change?: (val: string) => void;
    on_search?: (q: string) => void;
}> = ({ month, year, on_month_change, on_year_change, on_search }) => {
    return (
        <div className="mb-4">
            <Row
                gutter={16}
                align="middle"
            >
                <Col
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                >
                    <Select
                        value={month}
                        onChange={on_month_change}
                        placeholder="Select month"
                        style={{ width: '100%' }}
                    >
                        <Option value="all">All months</Option>
                        <Option value="01">January</Option>
                        <Option value="02">February</Option>
                        <Option value="03">March</Option>
                        <Option value="04">April</Option>
                        <Option value="05">May</Option>
                        <Option value="06">June</Option>
                        <Option value="07">July</Option>
                        <Option value="08">August</Option>
                        <Option value="09">September</Option>
                        <Option value="10">October</Option>
                        <Option value="11">November</Option>
                        <Option value="12">December</Option>
                    </Select>
                </Col>

                <Col
                    xs={24}
                    sm={12}
                    md={6}
                    lg={4}
                >
                    <Select
                        value={year}
                        onChange={on_year_change}
                        placeholder="Year"
                        style={{ width: '100%' }}
                    >
                        <Option value="2025">2025</Option>
                        <Option value="2024">2024</Option>
                        <Option value="2023">2023</Option>
                    </Select>
                </Col>

                <Col
                    xs={24}
                    sm={24}
                    md={10}
                    lg={10}
                >
                    <Space style={{ width: '100%' }}>
                        <Input
                            placeholder="Search by student, invoice or subject"
                            prefix={<Search size={16} />}
                            onPressEnter={(e: any) =>
                                on_search && on_search(e.target.value)
                            }
                        />
                        <Button type="primary">Pay Selected</Button>
                        <Button>Download</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Fees_Header;
