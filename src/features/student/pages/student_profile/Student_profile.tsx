import React from 'react';
import { Card, Row, Col, Avatar, Typography, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface Student {
  id: number;
  name: string;
  studentIdNumber: string;
  rollNumber: string;
  class: string;
  section: string;
  gender: string;
  behaviorPoints: number;
  admissionDate: string;
  dob: string;
  type: string;
  religion: string;
  phone: string;
  email: string;
  presentAddress: string;
  permanentAddress: string;
  profilePicture?: string;
  fatherName: string;
  fatherOccupation: string;
  fatherPhone: string;
  motherName: string;
  motherOccupation: string;
  motherPhone: string;
  guardianName: string;
  guardianEmail: string;
  guardianPhone: string;
  guardianRelation: string;
  guardianOccupation: string;
  guardianAddress: string;
}

const mockStudent: Student = {
  id: 1,
  name: 'Aisha Ondricka',
  studentIdNumber: '52674',
  rollNumber: '57475',
  class: 'Class 1',
  section: 'A',
  gender: 'Female',
  behaviorPoints: 0,
  admissionDate: '18th Jul, 1993',
  dob: '18th Feb, 2000',
  type: 'Normal',
  religion: 'Islam',
  phone: '+88012345671',
  email: 'student_6948287e14092@infixedu.com',
  presentAddress: 'Dhaka, Bangladesh',
  permanentAddress: 'Dhaka, Bangladesh',
  fatherName: 'Russ',
  fatherOccupation: 'Teacher',
  fatherPhone: '+88023812995',
  motherName: 'Lolita',
  motherOccupation: 'Housewife',
  motherPhone: '+88027568568',
  guardianName: 'Skylar',
  guardianEmail: 'guardian_l@infixedu.com',
  guardianPhone: '+88089541912',
  guardianRelation: 'Father',
  guardianOccupation: 'Businessman',
  guardianAddress: 'Dhaka-1219, Bangladesh',
};

const InfoRow = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex justify-between py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors px-2">
    <Text className="text-gray-500 font-medium">{label}</Text>
    <Text className="text-gray-700 font-semibold">{value}</Text>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Title
    level={5}
    className="text-gray-500 uppercase tracking-wider mb-6 !text-sm font-semibold border-b pb-2"
  >
    {children}
  </Title>
);

const Student_profile: React.FC = () => {
  const student = mockStudent;

  return (
    <div className="w-full">
      <Title
        level={3}
        className="text-gray-700 !mb-6"
      >
        Student Profile
      </Title>
      <Row
        gutter={[24, 24]}
        align="stretch"
      >
        {/* Left Column - Profile Card */}
        <Col
          xs={24}
          lg={6}
        >
          <Card
            className="shadow-sm border-0 rounded-lg overflow-hidden h-full"
            bodyStyle={{ padding: 0 }}
          >
            {/* Purple Header Background */}
            <div className="h-32 bg-primary relative">
              <div className="absolute -bottom-16 left-6 border-4 border-white rounded-lg shadow-md bg-white">
                {student.profilePicture ? (
                  <Avatar
                    shape="square"
                    size={120}
                    src={student.profilePicture}
                  />
                ) : (
                  <Avatar
                    shape="square"
                    size={120}
                    icon={<UserOutlined />}
                    className="bg-gray-200"
                  />
                )}
              </div>
            </div>

            <div className="pt-20 px-6 pb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Title
                    level={4}
                    className="!mb-0 text-gray-800"
                  >
                    Student Name
                  </Title>
                </div>
                <Text
                  strong
                  className="text-primary text-lg"
                >
                  {student.name}
                </Text>
              </div>

              <div className="space-y-1">
                <InfoRow
                  label="Admission Number"
                  value={student.studentIdNumber}
                />
                <InfoRow
                  label="Roll Number"
                  value={student.rollNumber}
                />
                <InfoRow
                  label="Class"
                  value={student.class}
                />
                <InfoRow
                  label="Section"
                  value={student.section}
                />
                <InfoRow
                  label="Gender"
                  value={student.gender}
                />
                <InfoRow
                  label="Behaviour Records Point"
                  value={student.behaviorPoints}
                />
              </div>
            </div>
          </Card>
        </Col>

        {/* Right Column - Details */}
        <Col
          xs={24}
          lg={18}
        >
          <Card className="shadow-sm border-0 rounded-lg h-full">
            {/* Personal Info Section */}
            <div className="mb-10">
              <SectionTitle>PERSONAL INFO</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                <InfoRow
                  label="Admission Date"
                  value={student.admissionDate}
                />
                <InfoRow
                  label="Date Of Birth"
                  value={student.dob}
                />
                <InfoRow
                  label="Type"
                  value={student.type}
                />
                <InfoRow
                  label="Religion"
                  value={student.religion}
                />
                <InfoRow
                  label="Phone Number"
                  value={student.phone}
                />
                <InfoRow
                  label="Email Address"
                  value={student.email}
                />
                <InfoRow
                  label="Present Address"
                  value={student.presentAddress}
                />
                <InfoRow
                  label="Permanent Address"
                  value={student.permanentAddress}
                />
              </div>
            </div>

            {/* Parent/Guardian Details Section */}
            <div>
              <SectionTitle>PARENT/GUARDIAN DETAILS</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                <InfoRow
                  label="Father Name"
                  value={student.fatherName}
                />
                <InfoRow
                  label="Occupation"
                  value={student.fatherOccupation}
                />
                <InfoRow
                  label="Phone Number"
                  value={student.fatherPhone}
                />
                <InfoRow
                  label="Mother Name"
                  value={student.motherName}
                />
                <InfoRow
                  label="Occupation"
                  value={student.motherOccupation}
                />
                <InfoRow
                  label="Phone Number"
                  value={student.motherPhone}
                />
                <InfoRow
                  label="Guardians Name"
                  value={student.guardianName}
                />
                <InfoRow
                  label="Email Address"
                  value={student.guardianEmail}
                />
                <InfoRow
                  label="Phone Number"
                  value={student.guardianPhone}
                />
                <InfoRow
                  label="Relation with Guardian"
                  value={student.guardianRelation}
                />
                <InfoRow
                  label="Occupation"
                  value={student.guardianOccupation}
                />
                <InfoRow
                  label="Guardian Address"
                  value={student.guardianAddress}
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Student_profile;
