import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Select, Upload, message } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

export default function Add_teacher_page() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Teacher added successfully!');
  };

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <Card className="rounded-lg shadow-sm border-0">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-lg font-bold">Add New Teacher</h2>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={(label, { required }) => (
            <>
              {label}
              {required && <span className="text-danger ml-1">*</span>}
            </>
          )}
        >
          <Row gutter={[16, 16]}>
            {/* First Name */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Please enter first name' }]}
              >
                <Input placeholder="Enter First Name" />
              </Form.Item>
            </Col>

            {/* Last Name */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Please enter last name' }]}
              >
                <Input placeholder="Enter Last Name" />
              </Form.Item>
            </Col>

            {/* Phone */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: 'Please enter phone number' }]}
              >
                <Input placeholder="Enter Phone" />
              </Form.Item>
            </Col>

            {/* NID */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="nid"
                label="National ID (NID)"
                rules={[{ required: true, message: 'Please enter NID' }]}
              >
                <Input placeholder="Enter NID Number" />
              </Form.Item>
            </Col>

            {/* Certificate (Upload) */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="certificate"
                label="Certificate"
                valuePropName="fileList"
                getValueFromEvent={(e: any) => {
                  if (Array.isArray(e)) return e;
                  return e?.fileList;
                }}
              >
                <Upload
                  maxCount={1}
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />}>Upload Certificate</Button>
                </Upload>
              </Form.Item>
            </Col>

            {/* ID No */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="idNo"
                label="ID No"
                rules={[{ required: true, message: 'Please enter ID No' }]}
              >
                <Input placeholder="Enter ID Number" />
              </Form.Item>
            </Col>

            {/* Blood Group */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="bloodGroup"
                label="Blood Group"
              >
                <Select placeholder="Select Blood Group">
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
                    <Option
                      key={bg}
                      value={bg}
                    >
                      {bg}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            {/* Religion */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="religion"
                label="Religion"
                rules={[{ required: true, message: 'Please select religion' }]}
              >
                <Select placeholder="Select Religion">
                  <Option value="islam">Islam</Option>
                  <Option value="christianity">Christianity</Option>
                  <Option value="hinduism">Hinduism</Option>
                  <Option value="buddhism">Buddhism</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* Subject */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: 'Please select subject' }]}
              >
                <Select placeholder="Select Subject">
                  {[
                    'Mathematics',
                    'English',
                    'Bangla',
                    'Physics',
                    'Chemistry',
                    'Biology',
                    'Higher Math',
                    'History',
                    'ICT',
                  ].map((s) => (
                    <Option
                      key={s}
                      value={s}
                    >
                      {s}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            {/* Address */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: 'Please enter address' }]}
              >
                <Input placeholder="Enter Address" />
              </Form.Item>
            </Col>

            {/* Backup Phone */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="backupPhone"
                label="Backup Phone"
              >
                <Input placeholder="Enter Backup Phone" />
              </Form.Item>
            </Col>

            {/* Email */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="email"
                label="E-Mail"
                rules={[
                  { required: true, message: 'Please enter email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>
            </Col>

            {/* Image (Profile Photo) */}
            <Col
              xs={24}
              md={12}
              lg={6}
            >
              <Form.Item
                name="image"
                label="Profile Photo"
                valuePropName="fileList"
                getValueFromEvent={(e: any) => {
                  if (Array.isArray(e)) return e;
                  return e?.fileList;
                }}
              >
                <Upload
                  maxCount={1}
                  listType="picture-card"
                  showUploadList={{ showPreviewIcon: false }}
                >
                  <div style={{ marginTop: 8 }}>
                    <UploadOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            {/* Short Bio */}
            <Col xs={24}>
              <Form.Item
                name="bio"
                label="Short Bio (Optional)"
              >
                <TextArea
                  rows={4}
                  placeholder="Write a short bio..."
                />
              </Form.Item>
            </Col>
          </Row>

          <div className="flex justify-start gap-4 mt-4">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="px-8"
            >
              Save Teacher
            </Button>
            <Button
              htmlType="button"
              size="large"
              className="px-8"
              onClick={() => form.resetFields()}
            >
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
