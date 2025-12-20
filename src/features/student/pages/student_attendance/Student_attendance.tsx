import { Button, Card, Col, Row, Select, Typography } from 'antd';
import { Printer, Search } from 'lucide-react';
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { useReactToPrint } from 'react-to-print';

const { Title, Text } = Typography;

const Student_attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2025');

  // Calculate days based on selected month and year
  const daysInMonth = dayjs(`${selectedMonth} ${selectedYear}`).daysInMonth();
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = dayjs(`${selectedMonth} ${selectedYear}`).date(i + 1);
    return {
      date: i + 1,
      dayName: date.format('ddd').toUpperCase(), // SUN, MON, etc.
      isWeekend: date.day() === 5 || date.day() === 6, // Friday (5) & Saturday (6)
    };
  });

  // Mock student row data (ensure dailyStatus matches dynamic length)
  const attendanceRecord = {
    p: 0,
    l: 0,
    a: 0,
    h: 0,
    f: 0,
    le: 0,
    percentage: '100%',
    dailyStatus: Array(daysInMonth)
      .fill(null)
      .map((_, i) => {
        // Example logic: Make specific days OFF or Present
        const date = dayjs(`${selectedMonth} ${selectedYear}`).date(i + 1);
        const day = date.day();
        if (day === 5 || day === 6) return 'W'; // Weekend
        return null;
      }),
  };

  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${selectedMonth}_${selectedYear}_Attendance`,
  });

  return (
    <div className="w-full space-y-6">
      <Title
        level={3}
        className="text-gray-700 !mb-0"
      >
        Attendance
      </Title>

      {/* Select Criteria Card */}
      <Card
        className="shadow-sm border-gray-200 rounded-lg no-print"
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
                Select Month *
              </Text>
            </div>
            <Select
              className="w-full h-10"
              value={selectedMonth}
              onChange={setSelectedMonth}
              options={[
                { value: 'January', label: 'January' },
                { value: 'February', label: 'February' },
                { value: 'March', label: 'March' },
              ]}
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
              value={selectedYear}
              onChange={setSelectedYear}
              options={[
                { value: '2025', label: '2025' },
                { value: '2024', label: '2024' },
              ]}
            />
          </Col>
          <Col
            xs={24}
            md={24}
            lg={4}
            className="mt-4 lg:mt-0 flex justify-end"
          >
            <Button
              type="primary"
              icon={<Search className="w-4 h-4" />}
              className="!bg-primary hover:!bg-primary/90 uppercase font-semibold h-10 px-6 border-none"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Print Trigger Button (Visible outside print area) */}
      <div className="flex justify-end no-print">
        <Button
          type="primary"
          icon={<Printer className="w-4 h-4" />}
          onClick={handlePrint}
          className="!bg-primary hover:!bg-primary/90 uppercase font-semibold border-none"
        >
          Print Attendance
        </Button>
      </div>

      {/* Attendance Table Card - Target for Print */}
      <div
        id="printable-area"
        ref={componentRef}
      >
        {/* Custom Print Header */}
        <div className="print-header w-full justify-between items-start border-b border-gray-200 pb-6 mb-6 hidden">
          {/* Logo Section */}
          <div className="flex-1">
            <h1
              className="text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 tracking-tighter"
              style={{ WebkitTextStroke: '1px #d8b4fe' }}
            >
              BEDU
            </h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mt-1">
              Ultimate Education ERP
            </p>
          </div>

          {/* School Info */}
          <div className="flex-1 text-center pt-2">
            <h2 className="text-2xl font-bold text-primary mb-1">BEDU</h2>
            <p className="text-sm text-gray-600 mb-2">Mirpur, Dhaka, Bangladesh</p>
            <p className="text-base font-semibold text-gray-700">Attendance</p>
          </div>

          {/* Student Info */}
          <div className="flex-1 text-right text-sm space-y-1.5 pt-2">
            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 mr-2">Name:</span>
              <span className="font-semibold text-gray-800">Jhon Doe</span>
            </div>
            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 mr-2">Class:</span>
              <span className="font-semibold text-gray-800">Nine</span>
              <span className="text-gray-500 mx-2">Section:</span>
              <span className="font-semibold text-gray-800">A</span>
            </div>
            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 mr-2">Month:</span>
              <span className="font-semibold text-gray-800">{selectedMonth}</span>
            </div>
            <div className="border-b border-gray-300 pb-1">
              <span className="text-gray-500 mr-2">Year:</span>
              <span className="font-semibold text-gray-800">{selectedYear}</span>
            </div>
          </div>
        </div>

        <Card
          className="shadow-sm border-gray-200 rounded-lg"
          bodyStyle={{ padding: 0 }}
        >
          {/* Header Tabs - Hidden in Print */}
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center no-print">
            <div className="border border-blue-200 bg-blue-50 text-blue-600 px-4 py-1.5 rounded text-sm font-semibold uppercase">
              {selectedMonth} {selectedYear} Attendance History
            </div>
          </div>

          {/* Legend & Actions (Print Button moved out) */}
          <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-100">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <span className="text-gray-600">
                Present: <span className="text-green-600 font-bold">P</span>
              </span>
              <span className="text-gray-600">
                Late: <span className="text-yellow-600 font-bold">L</span>
              </span>
              <span className="text-gray-600">
                Absent: <span className="text-red-600 font-bold">A</span>
              </span>
              <span className="text-gray-600">
                Half Day: <span className="text-blue-600 font-bold">F</span>
              </span>
              <span className="text-gray-600">
                Holiday: <span className="text-gray-800 font-bold">H</span>
              </span>
              <span className="text-gray-600">
                Leave: <span className="text-cyan-600 font-bold">Le</span>
              </span>
            </div>
          </div>

          {/* Custom Table Implementation to Custom Match Screenshot Grid */}
          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[1200px] border-collapse text-sm text-center">
              <thead>
                <tr className="text-gray-500 border-b border-gray-100">
                  <th className="p-3 w-10 border-r border-gray-100 font-medium">P</th>
                  <th className="p-3 w-10 border-r border-gray-100 font-medium">L</th>
                  <th className="p-3 w-10 border-r border-gray-100 font-medium">A</th>
                  <th className="p-3 w-10 border-r border-gray-100 font-medium">H</th>
                  <th className="p-3 w-10 border-r border-gray-100 font-medium">F</th>
                  <th className="p-3 w-10 border-r border-gray-100 font-medium">LE</th>
                  <th className="p-3 w-16 border-r border-gray-100 font-medium">%</th>
                  {days.map((d) => (
                    <th
                      key={d.date}
                      className="p-2 w-10 font-normal border-r border-gray-50 border-dashed"
                    >
                      <div className="text-xs text-gray-400 mb-1">{d.date}</div>
                      <div className="text-[10px] text-gray-500 font-semibold">{d.dayName}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 text-gray-600">
                  <td className="p-3 border-r border-gray-100">{attendanceRecord.p}</td>
                  <td className="p-3 border-r border-gray-100">{attendanceRecord.l}</td>
                  <td className="p-3 border-r border-gray-100">{attendanceRecord.a}</td>
                  <td className="p-3 border-r border-gray-100">{attendanceRecord.h}</td>
                  <td className="p-3 border-r border-gray-100">{attendanceRecord.f}</td>
                  <td className="p-3 border-r border-gray-100">{attendanceRecord.le}</td>
                  <td className="p-3 border-r border-gray-100">{attendanceRecord.percentage}</td>
                  {attendanceRecord.dailyStatus.map((status, idx) => (
                    <td
                      key={idx}
                      className="p-2 border-r border-gray-100"
                    >
                      {status && (
                        <span
                          className={`text-xs font-bold ${
                            status === 'P'
                              ? 'text-green-600'
                              : status === 'A'
                                ? 'text-red-600'
                                : status === 'W'
                                  ? 'text-purple-400' // Weekend/Holiday
                                  : 'text-gray-600'
                          }`}
                        >
                          {status}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Student_attendance;
