import { Button, Card, Col, Row, Select, Typography } from 'antd';
import { Search } from 'lucide-react';

const { Text } = Typography;

interface Exam_Schedule_HeaderProps {
  selected_exam?: string;
  on_exam_change: (exam: string) => void;
  selected_year: string;
  on_year_change: (year: string) => void;
  exam_options: { label: string; value: string }[];
  on_search_click: () => void;
}

const Exam_Schedule_Header: React.FC<Exam_Schedule_HeaderProps> = ({
  selected_exam,
  on_exam_change,
  selected_year,
  on_year_change,
  exam_options,
  on_search_click,
}) => {
  return (
    <Card
      className="shadow-sm border-gray-200 rounded-lg mb-6"
      title={
        <Text
          strong
          className="text-lg text-gray-700"
        >
          Select Criteria
        </Text>
      }
    >
      <Row
        gutter={24}
        align="bottom"
      >
        <Col
          xs={24}
          md={12}
          lg={10}
        >
          <div className="mb-2">
            <Text
              strong
              className="text-gray-500"
            >
              Select Exam *
            </Text>
          </div>
          <Select
            className="w-full h-10"
            placeholder="Select a exam"
            value={selected_exam}
            onChange={(val) => on_exam_change(val as string)}
            options={exam_options}
          />
        </Col>

        <Col
          xs={24}
          md={12}
          lg={10}
        >
          <div className="mb-2">
            <Text
              strong
              className="text-gray-500"
            >
              Select Year *
            </Text>
          </div>
          <Select
            className="w-full h-10"
            placeholder="Select Year"
            value={selected_year}
            onChange={on_year_change}
            options={[
              { value: '2024', label: '2024' },
              { value: '2025', label: '2025' },
              { value: '2026', label: '2026' },
            ]}
          />
        </Col>

        <Col
          xs={24}
          md={24}
          lg={4}
          className="mt-4 lg:mt-0 flex justify-end lg:justify-start"
        >
          <Button
            type="primary"
            icon={<Search className="w-4 h-4" />}
            onClick={on_search_click}
            className="w-full h-10 bg-blue-600 hover:bg-blue-700 font-semibold uppercase"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Exam_Schedule_Header;
