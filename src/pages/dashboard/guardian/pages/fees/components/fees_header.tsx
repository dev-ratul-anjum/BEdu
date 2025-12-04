import React from 'react';
import { Row, Col, Button, Input, Select, Space, Card, Typography } from 'antd';
import { Search, DollarSign } from 'lucide-react';

const { Option } = Select;
const { Title } = Typography;

export const Fees_Header: React.FC<{
    month?: string;
    year?: string;
    on_month_change?: (val: string) => void;
    on_year_change?: (val: string) => void;
    on_search?: (q: string) => void;
}> = ({ month, year, on_month_change, on_year_change, on_search }) => {
    return (
        <Card className="shadow-sm border-gray-200 mb-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-cyan-500" />
                    <Title
                        level={4}
                        className="!mb-0 !text-xl !font-semibold"
                    >
                        Fees Management
                    </Title>
                </div>
            </div>
            <div>
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
                        <Space
                            style={{ width: '100%' }}
                            size="small"
                        >
                            <Input
                                placeholder="Search by student, invoice or subject"
                                prefix={<Search size={16} />}
                                onPressEnter={(e: any) =>
                                    on_search && on_search(e.target.value)
                                }
                                style={{ height: '36px' }}
                            />
                            <Button
                                type="primary"
                                style={{ height: '36px' }}
                            >
                                Pay Selected
                            </Button>
                            <Button style={{ height: '36px' }}>Download</Button>
                        </Space>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};

export default Fees_Header;
